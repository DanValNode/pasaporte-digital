FROM node:12
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install -g serve
RUN npm run build
CMD serve -s build
ENV REACT_APP_BACKEND_SECURITY=none
EXPOSE 3000 5000