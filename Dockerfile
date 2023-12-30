ARG  CODE_VERSION=1.0.0

# base image
FROM node:20.10.0-alpine

# set working directory
WORKDIR /app

# add app  `
 Add . /app

# install and cache app dependencies
RUN npm install -g npm@10.2.5
RUN npm install

# start app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Make the port 5173 accessible outside of Docker
 EXPOSE 5173
