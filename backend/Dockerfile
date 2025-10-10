FROM node:latest as base

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx tsc

COPY . .

EXPOSE 3000

ENTRYPOINT ["node", "src/app.js"]