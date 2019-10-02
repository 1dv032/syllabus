## Content
* Some recap from last time
  * Dockerfile commands
* docker-compose
  * Bringing your containers together
* About the project
  * last part of the course


--
## Dockerfile example

```bash
FROM node:alpine
LABEL maintainer="thajo@lnu.se"

EXPOSE 8080

ENV INSTALL_PATH /var/www/app
RUN mkdir -p  $INSTALL_PATH
WORKDIR  $INSTALL_PATH

COPY package*.json .
RUN npm install --quiet
COPY . .

CMD ["npm", "start"]
```

```bash
docker build . -t thajo/node-app:1.0.0

docker run -d -p 8080:8080 thajo/node-app
```


--
### Dockerfile commands

* FROM
  * Defines the base image to work with
* LABEL<!-- {_class="fragment"} -->
  * Meta data about this image (creator, maintainer and so on)
* RUN<!-- {_class="fragment"} -->
  * Specifies one (or combined) commands to run in the shell
* CMD<!-- {_class="fragment"} -->
  * One per file, defaults for an executing container (entrypoint is default /bin/sh)
* COPY<!-- {_class="fragment"} -->
  * Copy files or directory and add them to the containers file system
* ADD<!-- {_class="fragment"} -->
  * Like copy, could use URLs, could unpack some compressed files


--
### Dockerfile commands
* ENV
  * Sets an environment variable in the container
* WORKDIR<!-- {_class="fragment"} -->
  * Specifies the working directory from where RUN, CMD, COPY, ADD...runs
* EXPOSE<!-- {_class="fragment"} -->
  * Exposes the ports to the container
* VOLUME<!-- {_class="fragment"} -->
  * Instructs how to create a mount point for holding data
* USER<!-- {_class="fragment"} -->
  * Instruct what user to execute the commands

<p>
There are more: https://docs.docker.com/engine/reference/builder/
</p><!-- {_class="fragment"} --><!-- {_style="font-size: 50%"} -->



--
### Best practice building images

* Prefer minimal base images
* Study the platform the application runs on<!-- {_class="fragment"} -->
  * How to run the application  
  * Install dependencies, security updates<!-- {_class="fragment"} -->
* Do not install unnecessary packages...<!-- {_class="fragment"} -->
* Update the base image if needed<!-- {_class="fragment"} -->
  * apt update, apt upgrade...
  * apk update... (if alpine)
* .dockerignore<!-- {_class="fragment"} -->
  * exclude files not relevant to the build
* Docker executes the container as root<!-- {_class="fragment"} -->
  * if possible use the USER directive

<p>
https://docs.docker.com/develop/develop-images/dockerfile_best-practices/<br>
https://snyk.io/blog/10-docker-image-security-best-practices/
</p><!-- {_class="fragment"} --><!-- {_style="font-size: 50%"} -->



--
## Commands to use

```bash
# Starting a container with a bash
docker run -t -i  thajo/node /bin/bash

# Execute a command on a container
docker exec <name_of_running_container> npm test

```

```bash
# Stop all containers
docker stop $(docker ps -a -q)

# Remove all containers
docker rm $(docker ps -a -q)

# Remove all images
docker rmi $(docker images -q)

# Remove all volumes (make sure to remove the volume container first)
docker volume rm $(docker volume ls -qf dangling=true)

# Delete most of the things...
docker system prune -a
```

https://caylent.com/docker-commands-cheat-sheet<!-- {_class="fragment"} --><!-- {_style="font-size: 50%"} -->



---
### Docker Compose

> Compose is a tool for defining and running multi-container Docker applications

* Uses a YAML-file to configure an applications services
  * Structure is shown through indentation (one or more spaces - NOT tabs).
  * List items are denoted by a dash
  * Key value pairs within a map are separated by a colon.
  * http://www.yaml.org/
* Creates (as default) a single virtual network (hosted, bridge, custom..)<!-- {_class="fragment"} -->
  * All "services"/containers adds to network
  * Create and start all "services"/containers
* Great for development environment<!-- {_class="fragment"} -->
  * and automatic testing



--
### Example docker-compose.yml

```bash
version: '3'
services:
  web:
    build: .
    depends_on:
      - mongodb
    ports:
      - "8080:5000"
  mongodb:
    image: mongo:3.4
    expose:
      - "27017"
    volumes:
      - mongodbdata:/data/db
volumes:
  mongodbdata:
```

```bash
docker-compose build # build images, control the builds
docker-compose up # Start everything
```

```bash
<ctrl+c> # Stop
docker-compose down # Take down the networks
docker-compose build --no-cache # rebuild
```


--
##  DEMO

* Node.js dev setup
  * with mongodb


--
## About the project

* Goal
  * Practice experience of building docker images (for dev and prod)
  * Practice of using docker-compose for testing a microservice
  * Practice of using Kebernetes
  * Practice of setting up a private docker image repository
  * Experience of problem solving...



--
## Description

[Project description on course page](#)
