FROM node:13-alpine as builder

WORKDIR /app/src

RUN apk update 

COPY package-lock.json .
COPY package.json .

RUN npm install

COPY . .

RUN npm run-script build

FROM nginx:1.17-alpine

RUN apk update && apk add curl

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/src/build/ /usr/share/nginx/html/
