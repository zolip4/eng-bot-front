# Stage 1: Базовый образ и установка зависимостей
FROM node:16-alpine as build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости, включая SASS
RUN npm install && npm install --save-dev sass

# Копируем остальной код приложения
COPY . ./

# Сборка приложения
RUN npm run build

# Stage 2: Продакшн-среда с использованием NGINX
FROM nginx:alpine

# Удаляем стандартный конфиг NGINX
RUN rm /etc/nginx/conf.d/default.conf

# Копируем пользовательский конфиг NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем результаты сборки из предыдущего этапа
COPY --from=build /app/build /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем NGINX
CMD ["nginx", "-g", "daemon off;"]
