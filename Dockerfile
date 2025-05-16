# install node.js in container
FROM node:18-alpine

# Set the working directory in container from this point every command will run within /containerAppFolder same as if we have done
# cd /containerAppFolder
WORKDIR /containerAppFolder

# Copy package.json and package-lock.json to install dependencies in container folder from this host folder 
COPY package*.json ./

# install all dependencies inside the containerFolder
RUN npm install

# Copy the rest of your application code to the working directory in the container
# ---- Issue here: COPY .. copies the parent directory of the Docker build context,
# which will fail or behave unexpectedly.
# You likely want to COPY . .  (copy current directory contents to /containerAppFolder)
COPY . .

# Expose the port the app runs on. since node.js port is listening on port 3000 in server.js in container also it wiil listen
# on same port just like if it would have been on my machine it would have listened on my localhost port 3000, similarly we 
# will run it in container so it will listen in port 3000 of container
# Note - EXPOSE is just for doumentation purpose it actually don't start the port, it just tells that app is running on that port
#        inside containere
EXPOSE 3000

# Define the command to run the application
CMD ["npx", "nodemon", "server/server.js"]




