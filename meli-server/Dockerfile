FROM node:16.5.0-stretch-slim

RUN apt-get update
RUN apt install nano git -y
COPY ["package.json", "/usr/src/"]
WORKDIR /usr/src
RUN yarn install
COPY [".", "/usr/src/"]

EXPOSE 8081

CMD ["yarn", "server"]
