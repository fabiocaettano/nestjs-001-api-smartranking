FROM node:v14.21.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .