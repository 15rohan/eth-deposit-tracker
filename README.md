# Ethereum Deposit Tracker

## Overview

This application tracks Ethereum deposits made to the Beacon Deposit Contract (`0x00000000219ab540356cBB839Cbe05303d7705Fa`). It records deposit details to MongoDB and sends notifications via Telegram.

## Prerequisites

- **Node.js**: Version 14 or higher
- **npm** (Node Package Manager)

# Setup and Installation

## 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/15rohan/eth-deposit-tracker.git
cd eth-deposit-tracker
```

## 2. Install Dependencies
Install the necessary dependencies using `npm`:

```bash
npm install
```

## 3. Environment Configuration
Create a `.env` file in the `backend` directory of your project. This file will store sensitive information and configuration settings.
Go to the Alchemy Website. Sign up and get your `ALCHEMY_API_KEY`.
Add the following environment variables to the `.env` file:

```bash
PORT=your-port
ALCHEMY_API_KEY=your-alchemy-api-key
```

## 4.  Setup MongoDB
Connect to your MongoDB Database and ensure it is running and accessible. If using MongoDB Atlas, make sure your `MONGO_URI` in the `.env` file is correct. You can use a local instance or a cloud-based MongoDB service. 

```bash
MONGO_URI=your-mongo-uri
```

## 5. Update and Verify Contract Address
Update the `BEACON_DEPOSIT_ADDRESS` in your `.env` file if needed:

```bash
BEACON_DEPOSIT_ADDRESS=your-beacon-deposit-contract-address
```

## 6. Running the Application
To start monitoring for deposits, navigate to the `backend` directory and start the application using:

```bash
cd backend
npm start
```

## 7. Set Up Telegram Notifications

### Open Telegram: Open the Telegram app on your mobile device or desktop.

### Start a Chat with BotFather:
Search for `@BotFather` in the Telegram search bar.
Start a chat with BotFather.

### Create a New Bot:
Send the command `/newbot` to BotFather.
Follow the prompts to set a name and username for your bot.
After completion, BotFather will provide you with a token. Save this token as it will be used to authenticate your bot.

### Obtain Your Chat ID
Find Your Chat ID:
Start a chat with your new bot (search for the bot by its username and send a message).
Open the following URL in your browser, replacing `YOUR_BOT_TOKEN` with the token you received from BotFather:

```bash
https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
```

Look for a JSON object that includes `"chat":{"id":YOUR_CHAT_ID}`. Note the `YOUR_CHAT_ID` value, as this is the ID of your chat.

### Configure Environment Variables
Update `.env` File in `backend` directory.
Add the following entries to the `.env file`, replacing the placeholders with your actual bot token and chat ID:

```bash
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

## 8. Dockerizing the Application
Follow the steps below to set up Docker and run the application inside a container.

Prerequisites
Docker must be installed and running on your machine.
You should have a `.env` file with all required environment variables such as MongoDB connection string, Alchemy API key, and Telegram token.
Steps to Dockerize and Run the Application:

Build the Docker Image:
Make sure you are in the root directory where the Dockerfile is located and run the following command:
```bash
docker build -t eth-deposit-tracker .
```
This command builds a Docker image named `eth-deposit-tracker` from the Dockerfile in the current directory.

Run the Docker Container:
After building the image, you can run the container using:
```bash
docker run --env-file .env -p 8080:8080 eth-deposit-tracker
```

`--env-file .env`: Loads the environment variables from your .env file.
`-p 8080:8080`: Maps port 8080 of your container to port 8080 of your host machine.
`eth-deposit-tracker`: The name of the Docker image you just built.

Rebuilding the Image: If you make changes to your application code, you will need to rebuild the image using:
```bash
docker build -t eth-deposit-tracker .
```

Stopping the Container: You can stop the running container using:
```bash
docker ps
docker stop <container-id >
```

Example Dockerfile
Your Dockerfile should look like this:

```bash
# Use official Node.js image as base
FROM node:16

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
```

# Grafana Dashboard

This directory contains the JSON file for a Grafana dashboard used for monitoring and visualization.

## Dashboard

- **eth-deposit-dashboard.json**: Contains multiple panels, including:
  - **Average Gas Prices by the Hour**: Shows fluctuations in gas prices over the last 24 hours.
  - **24-Hour Deposits Heatmap**: Displays a heatmap of deposit counts over a 24-hour period.

## How to Import the Dashboard into Grafana

1. Open Grafana and navigate to the **Dashboards** section.
2. Click on **Import**.
3. Choose the **Upload JSON file** option and select the `eth-deposit-dashboard.json` file from this directory.
4. Use the MongoDB Plugin and MongoDB Data Source.

## Configuration Notes

- Ensure that your Grafana instance is connected to the MongoDB Data Source
- Update any relevant variables or settings according to your environment.

For more information on Grafana and how to use it, visit the [Grafana Documentation](https://grafana.com/docs/).

# Conclusion
By following these steps, you have successfully set up Telegram notifications for your Ethereum deposit tracker application. This will enable you to receive real-time alerts for new deposits directly in your Telegram chat. You can also check out the Grafana Dashboard for seeing some extra information and data visualizations about deposits.