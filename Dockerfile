FROM node:carbon-slim

ENV AC_HOST="activitiesms"
# Create app directory
WORKDIR /gatherme-api-gateway

# Install app dependencies
COPY package.json /gatherme-api-gateway/
COPY package-lock.json /gatherme-api-gateway/
RUN npm install

# Bundle app source
COPY . /gatherme-api-gateway/

EXPOSE 9001
CMD [ "npm", "start" ]
