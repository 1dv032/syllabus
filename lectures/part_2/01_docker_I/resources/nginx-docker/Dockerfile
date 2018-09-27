# Nginx Dockerfile

FROM ubuntu:16.04

LABEL "com.example.vendor"="LNU"
LABEL version="1.0"
LABEL description="This is just a demo"
LABEL maintainer="thajo@lnu.se"

RUN apt-get update \
    && apt-get install -y nginx \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* 

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
