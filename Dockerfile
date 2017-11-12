FROM mhart/alpine-node:latest

ADD ./ ./server

WORKDIR /server
ENV LOGGING_LEVEL 'info'
EXPOSE 8080

CMD node build/dev-server.js
