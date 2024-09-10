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