Yes. Your schema is mostly valid SQL, but it is **MySQL-specific in a few places** and needs changes for PostgreSQL.

### Main syntax differences

| Your SQL                                     | PostgreSQL                  |
| -------------------------------------------- | --------------------------- |
| `BIGINT UNSIGNED`                            | `BIGINT`                    |
| `AUTO_INCREMENT`                             | `GENERATED ... AS IDENTITY` |
| `TIMESTAMP DEFAULT CURRENT_TIMESTAMP`        | ✅ Same                      |
| `ON UPDATE CURRENT_TIMESTAMP`                | ❌ Not supported             |
| `TEXT`                                       | ✅ Same                      |
| `VARCHAR(n)`                                 | ✅ Same                      |
| `INDEX idx_name (...)` inside `CREATE TABLE` | ❌ Create indexes separately |
| `ON DELETE CASCADE`                          | ✅ Same                      |
| `NULL`                                       | ✅ Same                      |

### PostgreSQL version

I'd recommend using **identity columns** rather than the older `SERIAL` approach.

```sql
CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE profile (
    user_id BIGINT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    bio TEXT,
    date_of_birth DATE,
    location VARCHAR(255),
    website VARCHAR(255),

    CONSTRAINT fk_profile_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE TABLE posts (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id BIGINT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_posts_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE INDEX idx_posts_user_id
    ON posts(user_id);


CREATE TABLE photos (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id BIGINT NOT NULL,
    post_id BIGINT NULL,
    photo_url VARCHAR(500) NOT NULL,
    caption VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_photos_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_photos_post
        FOREIGN KEY (post_id)
        REFERENCES posts(id)
        ON DELETE CASCADE
);

CREATE INDEX idx_photos_user_id
    ON photos(user_id);

CREATE INDEX idx_photos_post_id
    ON photos(post_id);


CREATE TABLE following (
    follower_id BIGINT NOT NULL,
    following_id BIGINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (follower_id, following_id),

    CONSTRAINT fk_following_follower
        FOREIGN KEY (follower_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_following_following
        FOREIGN KEY (following_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE INDEX idx_following_following_id
    ON following(following_id);
```

### ⚠️ One important issue: `updated_at`

This MySQL part:

```sql
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP
```

**doesn't work in PostgreSQL.**

PostgreSQL doesn't have MySQL's `ON UPDATE` column syntax.

If you want `posts.updated_at` to automatically change whenever the row is updated, you typically use a **trigger**:

```sql
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_posts_updated_at
BEFORE UPDATE ON posts
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();
```

So the flow becomes:

```text
UPDATE posts
       │
       ▼
BEFORE UPDATE trigger
       │
       ▼
updated_at = CURRENT_TIMESTAMP
       │
       ▼
row updated
```

---

## Your INSERT statements

Almost all of your `INSERT` statements are **already valid PostgreSQL**.

For example:

```sql
INSERT INTO users (username, email, password_hash)
VALUES
    ('alice', 'alice@example.com', 'hash_alice'),
    ('bob', 'bob@example.com', 'hash_bob'),
    ('charlie', 'charlie@example.com', 'hash_charlie'),
    ('david', 'david@example.com', 'hash_david'),
    ('emma', 'emma@example.com', 'hash_emma');
```

And the other inserts are also syntactically fine.

### But there's an important consideration with your IDs

You currently assume:

```sql
(1, ...)
(2, ...)
(3, ...)
```

for `user_id`, and:

```sql
(1, ...)
(2, ...)
```

for `post_id`.

That works **if you're inserting into a completely empty database and the generated IDs start at 1**.

But it's generally better not to assume generated IDs.

For example, if you later delete Alice and recreate her:

```text
Alice → id 1
Bob   → id 2

delete Alice

New Alice → id 6
```

Your hard-coded:

```sql
(1, 'Alice', ...)
```

would now refer to the wrong user or fail.

For learning, your current inserts are perfectly fine. For production-style SQL, you'd normally use `RETURNING id` or lookup queries.

---

## One more PostgreSQL consideration: `TIMESTAMP`

You currently have:

```sql
created_at TIMESTAMP
```

PostgreSQL also supports:

```sql
TIMESTAMP WITH TIME ZONE
```

which is commonly written:

```sql
created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
```

For an application where users can be in different time zones, I'd generally recommend:

```sql
created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
```

and similarly:

```sql
updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
```

This is particularly useful for a social-network-style application.

---

### In short

Your **data model is fine**. The main MySQL → PostgreSQL conversions are:

```text
BIGINT UNSIGNED
        ↓
BIGINT

AUTO_INCREMENT
        ↓
GENERATED ALWAYS AS IDENTITY

ON UPDATE CURRENT_TIMESTAMP
        ↓
TRIGGER

INDEX inside CREATE TABLE
        ↓
CREATE INDEX separately
```

Everything else in your schema—including **foreign keys, composite primary key, `ON DELETE CASCADE`, `TEXT`, `DATE`, `VARCHAR`, and your INSERT syntax**—is essentially PostgreSQL-compatible.
