FROM node:latest as base

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5173

ENTRYPOINT [ "npm", "run", "dev" ]