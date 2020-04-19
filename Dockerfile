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

COPY nginx/config.inc /etc/nginx/conf.d/config.inc
RUN chmod 0644 /etc/nginx/conf.d/config.inc

RUN sed -i '9i\        include /etc/nginx/conf.d/config.inc;\n' /etc/nginx/conf.d/default.conf
RUN sed -i 's/index  index.html index.htm/try_files $uri \/index.html/g' /etc/nginx/conf.d/default.conf


COPY --from=builder /app/src/build/ /usr/share/nginx/html/
