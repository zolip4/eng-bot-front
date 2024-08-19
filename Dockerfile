FROM node:16 as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

RUN npm install --save-dev sass

COPY . ./

RUN if [ "$REACT_APP_BUILD_ENV" = "production" ]; then npm run build; fi

FROM node:16 as runtime

WORKDIR /app

COPY --from=build /app ./

EXPOSE ${PORT}

CMD if [ "$REACT_APP_BUILD_ENV" = "production" ]; then npm install -g serve && serve -s build -l ${PORT}; else npm start; fi
