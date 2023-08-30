FROM node:lts
WORKDIR /app_build
COPY . .
RUN npm install && npm run build
