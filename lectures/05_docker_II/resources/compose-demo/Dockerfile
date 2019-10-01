## Example
FROM node:alpine

LABEL maintainer="thajo@lnu.se"

# Expose a port from the container
EXPOSE 3000

# Set an env-variable
ENV INSTALL_PATH /var/www/app
RUN mkdir -p  $INSTALL_PATH
WORKDIR  $INSTALL_PATH

# Copy code
COPY package*.json ./
RUN npm install --quiet

# RUN npm ci --only-production

RUN npm install -g nodemon

# Copy app
COPY . .

CMD ["npm", "run", "devstart"]