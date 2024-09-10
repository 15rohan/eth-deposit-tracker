FROM node:18

WORKDIR /app

# Copying the package.json and package-lock.json files
COPY package*.json ./

# Installing the dependencies
RUN npm install 

# Copying rest of the files
COPY . .

# Expose the port that your app runs on (you can replace 3000 with your app’s port)
EXPOSE 8080

# Start the Node.js application
CMD ["npm", "start"]
