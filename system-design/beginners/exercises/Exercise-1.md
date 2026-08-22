Lecture5: Relational Databases


```
users
  │
  ├──────── 1 : 1 ──────── profile
  │
  ├──────── 1 : N ──────── posts
  │                          │
  │                          └── N : 1 ── users
  │
  ├──────── 1 : N ──────── photos
  │
  └──────── N : N ──────── users
                │
             following
```

### Schema of individual tables:

#### Schema of users
```
CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Schema of profile:

Each user has one profile.

Relationship:

users 1 ───────── 1 profile

```
CREATE TABLE profile (
    user_id BIGINT UNSIGNED PRIMARY KEY,
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
```

Here user_id is both:

Primary Key
Foreign Key → users.id

That is what enforces the 1:1 relationship.

#### Schema of posts:
A user can create many posts.

Relationship:

users 1 ───────── N posts

```
CREATE TABLE posts (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_posts_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    INDEX idx_posts_user_id (user_id)
);
```

Example:

User 1
  │
  ├── Post 101
  ├── Post 102
  └── Post 103

posts.user_id → users.id

#### Schema of photos:
You need to decide whether photos are:

profile photos
photos attached to posts
or both

For a simple social network, I'd make photos belong to a user, and optionally associate them with a post.

```
CREATE TABLE photos (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    post_id BIGINT UNSIGNED NULL,
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
        ON DELETE CASCADE,

    INDEX idx_photos_user_id (user_id),
    INDEX idx_photos_post_id (post_id)
);
```

This gives you:

users
  │
  ├── photos
  │
  └── posts
        │
        └── photos

For example:

Alice
 ├── Photo 1
 ├── Photo 2
 │
 └── Post 101
       ├── Photo 3
       └── Photo 4

#### Schema of following:
A user can follow many users, and a user can be followed by many users.

Therefore:

users N ───────── N users
             ↑
         following


```
CREATE TABLE following (
    follower_id BIGINT UNSIGNED NOT NULL,
    following_id BIGINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (follower_id, following_id),

    CONSTRAINT fk_following_follower
        FOREIGN KEY (follower_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_following_following
        FOREIGN KEY (following_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    INDEX idx_following_following_id (following_id)
);
```

Notice that both columns reference the same table:

following.follower_id  → users.id
following.following_id → users.id

That's called a self-referencing relationship.

### Complete relationship

Your database now looks like:

                         ┌──────────────┐
                         │    users     │
                         │──────────────│
                         │ id PK        │
                         │ username     │
                         │ email        │
                         └──────┬───────┘
                                │
              ┌─────────────────┼──────────────────┐
              │                 │                  │
             1:1               1:N                1:N
              │                 │                  │
              ▼                 ▼                  ▼
       ┌─────────────┐   ┌─────────────┐    ┌─────────────┐
       │   profile   │   │    posts    │    │   photos    │
       │─────────────│   │─────────────│    │─────────────│
       │ user_id PK  │   │ id PK       │    │ id PK       │
       │ bio         │   │ user_id FK  │    │ user_id FK  │
       └─────────────┘   │ content     │    │ post_id FK  │
                         └──────┬──────┘    │ photo_url   │
                                │            └─────────────┘
                               1:N
                                │
                                ▼
                              photos


                    ┌─────────────────────┐
                    │      following      │
                    │─────────────────────│
                    │ follower_id FK      │──────┐
                    │ following_id FK     │──────┤
                    │ created_at          │      │
                    └─────────────────────┘      │
                              │                  │
                              └──────────────────┘
                                  users



In terms of foreign keys

| Table       | Column         | References | Relationship |
| ----------- | -------------- | ---------- | ------------ |
| `profile`   | `user_id`      | `users.id` | 1:1          |
| `posts`     | `user_id`      | `users.id` | 1:N          |
| `photos`    | `user_id`      | `users.id` | 1:N          |
| `photos`    | `post_id`      | `posts.id` | 1:N          |
| `following` | `follower_id`  | `users.id` | N:N          |
| `following` | `following_id` | `users.id` | N:N          |


#### Insert data:
```
-- =========================================
-- 1. USERS
-- =========================================

INSERT INTO users (username, email, password_hash)
VALUES
    ('alice', 'alice@example.com', 'hash_alice'),
    ('bob', 'bob@example.com', 'hash_bob'),
    ('charlie', 'charlie@example.com', 'hash_charlie'),
    ('david', 'david@example.com', 'hash_david'),
    ('emma', 'emma@example.com', 'hash_emma');


-- =========================================
-- 2. PROFILE
-- =========================================

INSERT INTO profile
    (user_id, first_name, last_name, bio, date_of_birth, location, website)
VALUES
    (1, 'Alice', 'Johnson',
     'Software developer and photographer',
     '1998-05-12', 'New York',
     'https://alice.example.com'),

    (2, 'Bob', 'Smith',
     'Backend developer and coffee lover',
     '1997-08-21', 'London',
     'https://bob.example.com'),

    (3, 'Charlie', 'Brown',
     'Travel enthusiast',
     '1999-02-15', 'Paris', NULL),

    (4, 'David', 'Wilson',
     'Fitness and technology',
     '1996-11-03', 'Toronto',
     'https://david.example.com'),

    (5, 'Emma', 'Davis',
     'Designer and artist',
     '2000-01-25', 'Sydney', NULL);


-- =========================================
-- 3. POSTS
-- =========================================

INSERT INTO posts (user_id, content)
VALUES
    (1, 'Had an amazing day exploring the city!'),
    (1, 'Just finished building my new project.'),
    (2, 'Coffee and code. Perfect combination.'),
    (2, 'Learning more about MySQL transactions today.'),
    (3, 'Finally visited Paris! What an incredible experience.'),
    (4, 'Morning workout completed!'),
    (5, 'Working on a new design project.');


-- =========================================
-- 4. PHOTOS
-- =========================================

INSERT INTO photos (user_id, post_id, photo_url, caption)
VALUES
    (1, 1, 'https://example.com/photos/alice-city.jpg',
     'City exploration'),

    (1, 2, 'https://example.com/photos/alice-project.jpg',
     'My new project'),

    (2, 3, 'https://example.com/photos/bob-coffee.jpg',
     'Morning coffee'),

    (3, 5, 'https://example.com/photos/charlie-paris.jpg',
     'Paris trip'),

    (4, 6, 'https://example.com/photos/david-workout.jpg',
     'Morning workout'),

    (5, 7, 'https://example.com/photos/emma-design.jpg',
     'New design project');


-- =========================================
-- 5. FOLLOWING
-- =========================================

INSERT INTO following (follower_id, following_id)
VALUES
    (1, 2),
    (1, 3),
    (1, 5),

    (2, 1),
    (2, 4),

    (3, 1),
    (3, 5),

    (4, 2),
    (4, 3),

    (5, 1),
    (5, 4);

```