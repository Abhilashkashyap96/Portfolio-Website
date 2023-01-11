FROM node:alpine
WORKDIR /core
ENV PATH="./node modules/.bin:$xPATH"
COPY . .
RUN npm run build
CMD ["npm","start"]