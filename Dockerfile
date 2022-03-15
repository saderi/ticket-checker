FROM node:12-stretch-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "index.js"]
