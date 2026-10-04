## Basic Docker Commands

#### <u>i. docker pull </u>
![alt text](./dockerNotesImages/1.%20dockerPull.png)

#### <u>ii. docker images </u>
![alt text](./dockerNotesImages/2.%20dockerImages.png)

#### <u>iii. docker ps </u>
![alt text](./dockerNotesImages/3.%20dockerPS.png)

#### <u>iv. docker create </u>
![alt text](./dockerNotesImages/4.%20dockerCreate.png)

#### <u>v. docker start </u>
![alt text](./dockerNotesImages/5.%20dockerStart.png)

#### <u>vi. docker stop </u>
![alt text](./dockerNotesImages/6.%20dockerStop.png)

#### <u>viii. Linux ps command</u>
![alt text](./dockerNotesImages/7.%20Linux%20PS%20commands.png)

#### <u>ix. ps aux </u>
![alt text](./dockerNotesImages/8.%20ps%20aux%20grep.png)

#### <u>x. docker exec </u>
![alt text](./dockerNotesImages/9.%20dockerExec.png)

#### <u>xi. docker exec -t </u>
![alt text](./dockerNotesImages/10.%20dockerExec%20-t%20option.png)

#### <u>xii. docker exec -i </u>
![alt text](./dockerNotesImages/11.%20dockerExec%20-i%20option.png)

#### <u>xiii. docker exec -it : Opening terminal inside the container </u>
![alt text](./dockerNotesImages/12.%20dockerExec%20-it%20opening%20a%20termminal%20inside%20the%20container.png)

#### <u>xiv. docker run </u>
docker run is equivalent to docker pull + create + start
![alt text](./dockerNotesImages/13.%20dockerRun.png)

#### <u>xv. docker run -it </u>
![alt text](./dockerNotesImages/14.%20dockerRun%20-it%20option.png)


### <u>xvi. Locating the docker image </u>
![alt text](./dockerNotesImages/15.%20LocatingTheDockerImage.png)

### <u>xvii. docker run --rm -it</u>
![alt text](./dockerNotesImages/16.%20dockerRun%20-rm%20-it%20option.png)

### <u>xviii. docker inspect</u>
![alt text](./dockerNotesImages/17.%20dockerInspect.png)

### <u>xviv. docker rm</u>
![alt text](./dockerNotesImages/18.%20dockerRm.png)

### <u>xv. docker rmi</u>
![alt text](./dockerNotesImages/19.%20dockerRmi.png)

### <u>xvi. docker logs</u>
![alt text](./dockerNotesImages/20.%20dockerLogs.png)

### <u>xvii. docker help</u>
![alt text](./dockerNotesImages/21.%20dockerHelp.png)

### <u>xviii. docker image prune</u>
![alt text](./dockerNotesImages/22.%20dockerImagePrune.png)


-------------------------------------------------

## Anatomy of a Dockerfile:

These are some of the most important **Dockerfile instructions**. The easiest way to understand them is to separate them into **image-building instructions** and **container-runtime instructions**.

### Dockerfile example

```dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

LABEL maintainer="Sailesh"

CMD ["node", "server.js"]
```

Now let's break down each one.

| Instruction | Purpose                       | When it runs    | Simple meaning                      |
| ----------- | ----------------------------- | --------------- | ----------------------------------- |
| `FROM`      | Selects base image            | Build time      | "Start with this image"             |
| `RUN`       | Executes command              | Build time      | "Do this while building the image"  |
| `CMD`       | Default command               | Container start | "Run this when container starts"    |
| `EXPOSE`    | Documents container port      | Image metadata  | "App listens on this port"          |
| `COPY`      | Copies files                  | Build time      | "Copy files into image"             |
| `WORKDIR`   | Sets working directory        | Build/runtime   | "Work from this folder"             |
| `LABEL`     | Adds metadata                 | Build time      | "Attach information to image"       |
| `ENV`       | Sets environment variable     | Build/runtime   | "Set this variable"                 |
| `ADD`       | Copies files + extra features | Build time      | "COPY with additional capabilities" |

---

## 1. `FROM`

```dockerfile
FROM node:20
```

Defines the **base image**.

For example:

```dockerfile
FROM ubuntu:24.04
```

means:

```text
Your Docker image
        ↑
Ubuntu 24.04
```

Or:

```dockerfile
FROM node:20
```

means your image starts with an image containing Node.js 20.

**Almost every Dockerfile starts with `FROM`.**

---

## 2. `RUN`

```dockerfile
RUN npm install
```

Executes a command **while building the Docker image**.

For example:

```dockerfile
FROM node:20

WORKDIR /app

COPY package.json .

RUN npm install
```

When you run:

```bash
docker build .
```

Docker executes:

```text
npm install
```

and saves the result into the image.

So:

```text
docker build
     ↓
FROM
     ↓
COPY
     ↓
RUN npm install
     ↓
Image created
```

### Important

`RUN` ≠ application startup.

It happens during **image creation**.

---

## 3. `CMD`

```dockerfile
CMD ["node", "server.js"]
```

Defines the **default command to execute when a container starts**.

For example:

```bash
docker build -t myapp .
docker run myapp
```

Docker effectively runs:

```bash
node server.js
```

inside the container.

So:

```text
docker build
     ↓
creates image
     ↓
docker run
     ↓
CMD executes
     ↓
node server.js
```

### RUN vs CMD

This is one of the most important distinctions:

```dockerfile
RUN npm install
```

→ happens **during image build**

```dockerfile
CMD ["npm", "start"]
```

→ happens **when container starts**

---

## 4. `EXPOSE`

```dockerfile
EXPOSE 3000
```

Indicates that the application inside the container is expected to listen on port `3000`.

It **does not publish the port to your host**.

For example:

```dockerfile
EXPOSE 3000
```

Then:

```bash
docker run -p 8080:3000 myapp
```

means:

```text
Host                     Container

localhost:8080  ───────→  :3000
                           ↓
                         Node.js
```

Remember:

> `EXPOSE` = container port declaration
> `-p` = host-to-container port mapping

---

# 5. `COPY`

```dockerfile
COPY package.json .
```

Copies files from your **build context** into the Docker image.

Suppose your computer has:

```text
myapp/
├── Dockerfile
├── package.json
├── server.js
└── src/
```

And:

```dockerfile
WORKDIR /app

COPY package.json .
```

The image gets:

```text
/app/
└── package.json
```

Another example:

```dockerfile
COPY . .
```

means:

```text
Your project directory
        ↓
    Docker image
        ↓
       /app
```

---

# 6. `WORKDIR`

```dockerfile
WORKDIR /app
```

Sets the **current working directory**.

Instead of doing:

```dockerfile
RUN cd /app
RUN npm install
```

you can simply do:

```dockerfile
WORKDIR /app
RUN npm install
```

After:

```dockerfile
WORKDIR /app
```

subsequent instructions operate from `/app`.

Example:

```dockerfile
WORKDIR /app

COPY package.json .

RUN npm install
```

The `package.json` goes to:

```text
/app/package.json
```

---

# 7. `LABEL`

Adds metadata to the Docker image.

Example:

```dockerfile
LABEL maintainer="Sailesh"
LABEL version="1.0"
LABEL description="Node.js application"
```

This doesn't affect your application's execution.

It's basically **information about the image**.

You can inspect it with:

```bash
docker inspect myapp
```

---

# 8. `ENV`

Sets an **environment variable**.

Example:

```dockerfile
ENV PORT=3000
```

Your application can access:

```text
PORT=3000
```

For Node.js:

```javascript
process.env.PORT
```

would return:

```text
3000
```

You can also have:

```dockerfile
ENV NODE_ENV=production
ENV PORT=3000
```

Then:

```text
Container environment

NODE_ENV = production
PORT     = 3000
```

You can override it when starting the container:

```bash
docker run -e PORT=5000 myapp
```

Then the container gets:

```text
PORT=5000
```

instead of `3000`.

---

# 9. `ADD`

`ADD` can copy files into the image, similar to `COPY`.

```dockerfile
ADD app.js /app/
```

But `ADD` has **additional behavior**.

For example, it can automatically extract certain local tar archives.

```dockerfile
ADD app.tar.gz /app/
```

The archive can be extracted into `/app`.

Because `COPY` is simpler and more predictable, the general recommendation is:

> **Use `COPY` unless you specifically need an `ADD` feature.**

---

# The most important mental model

Imagine this Dockerfile:

```dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

LABEL version="1.0"

CMD ["npm", "start"]
```

### During `docker build`

These happen:

```text
FROM node:20
       ↓
WORKDIR /app
       ↓
COPY package*.json ./
       ↓
RUN npm install
       ↓
COPY . .
       ↓
ENV PORT=3000
       ↓
EXPOSE 3000
       ↓
LABEL version="1.0"
       ↓
       IMAGE
```

### During `docker run`

The important runtime instruction is:

```text
CMD ["npm", "start"]
          ↓
      application
          ↓
    listening :3000
```

And if you run:

```bash
docker run -p 8080:3000 myapp
```

you get:

```text
                  HOST
        ┌─────────────────────┐
        │                     │
        │ localhost:8080      │
        │        │            │
        └────────┼────────────┘
                 │
                 │ Docker port mapping
                 ↓
        ┌─────────────────────┐
        │     CONTAINER       │
        │                     │
        │      :3000          │
        │        │            │
        │    Node.js app      │
        │                     │
        └─────────────────────┘
```

### One-line memory trick

**`FROM`** → Start from this image
**`WORKDIR`** → Work here
**`COPY`** → Bring files here
**`RUN`** → Build/install things
**`ENV`** → Set variables
**`EXPOSE`** → Declare container port
**`LABEL`** → Add metadata
**`CMD`** → Start this by default
**`ADD`** → COPY + extra capabilities

