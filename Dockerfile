FROM node:6 AS build
WORKDIR /app
ADD . /app
RUN npm install
RUN npm run build

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
