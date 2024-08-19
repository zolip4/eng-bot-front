FROM node:16-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN npm install --save-dev sass

COPY . ./

ARG REACT_APP_BUILD_ENV
RUN if [ "$REACT_APP_BUILD_ENV" = "production" ]; then npm run build; fi

FROM node:16-alpine as runtime

WORKDIR /app

COPY --from=build /app ./

ENV PORT=80
EXPOSE ${PORT}

CMD if [ "$REACT_APP_BUILD_ENV" = "production" ]; then npm install -g serve && serve -s build -l ${PORT}; else npm start; fi
