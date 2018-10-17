############################################################
# Dockerfile to build a node.js development
# Based on Ubuntu
############################################################

# Set the base image to Ubuntu
FROM node:7

# File Author / Maintainer
LABEL maintainer="thajo@lnu.se"

# Create app dir
RUN mkdir /opt/app

# Set working directory
WORKDIR /opt/app

# Copy node application folder
COPY . .
RUN npm install --quiet

CMD npm start

EXPOSE 5000
