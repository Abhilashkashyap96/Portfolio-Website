FROM node:alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./


RUN npm install --silent

COPY . ./

RUN npm run build



FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY react.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]