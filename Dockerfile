FROM node:16.18-alpine
WORKDIR /app-frontend
COPY package.json package-lock.json /app-frontend/
RUN npm install
COPY . .
ENTRYPOINT [ "npm","run", "build" ]



