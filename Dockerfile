FROM node:16.18-alpine
WORKDIR /app-frontend
COPY package.json package-lock.json /app-frontend/
COPY . .
RUN npm run build



