## Build an image for production

## Push to docker hub

## Use the image

## Create your own docker repository

## Some best practice

---
### Docker Compose

> Compose is a tool for defining and running multi-container Docker applications

* Uses a YAML-file to configure an applications services
* Structure is shown through indentation (one or more spaces - NOT tabs).
* List items are denoted by a dash
* Key value pairs within a map are separated by a colon.

http://www.yaml.org/


--
```
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

## Demo example

## About the project