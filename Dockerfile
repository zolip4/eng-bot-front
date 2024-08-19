# Stage 1: Build the React app
FROM node:16 as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

ARG REACT_APP_BUILD_ENV=production
ARG PORT=3000

# If the REACT_APP_BUILD_ENV is set to production, run the build command
RUN if [ "$REACT_APP_BUILD_ENV" = "production" ]; then npm run build; fi

# Stage 2: Serve the React app or start the development server
FROM node:16 as runtime

WORKDIR /app

COPY --from=build /app ./

EXPOSE ${PORT}

# If REACT_APP_BUILD_ENV is set to production, serve the app using serve
CMD if [ "$REACT_APP_BUILD_ENV" = "production" ]; then npm install -g serve && serve -s build -l ${PORT}; else npm start; fi
