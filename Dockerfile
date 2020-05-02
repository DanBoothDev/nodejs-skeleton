FROM node:10
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json ./
# run install
RUN npm install
# Bundle app source
COPY . .
# expose port so it can be seen
CMD [ "npm", "start" ]