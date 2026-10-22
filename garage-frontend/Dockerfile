# 1. Angular app build karne ke liye Node.js
FROM node:22-alpine AS build

# 2. Container ke andar working directory
WORKDIR /app

# 3. Dependencies ki files copy karo
COPY package*.json ./
RUN npm ci

# 4. Project ka code copy karo
COPY . .

# 5. Production build banao
RUN npm run build -- --configuration production

# 6. Nginx se frontend serve karo
FROM nginx:alpine
COPY --from=build /app/dist/garage-frontend/browser /usr/share/nginx/html

# 7. Web server ka port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]