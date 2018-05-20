FROM node:8-alpine
LABEL MAINTAINER="seanwashington"
LABEL version="1"

# Set environment variables
ENV HOST 0.0.0.0
ENV NODE_ENV production

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app/
RUN npm install
COPY . /app/

RUN npm run build

COPY .nuxt /app/

EXPOSE 3000
CMD [ "npm", "start" ]
