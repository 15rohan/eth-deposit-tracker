# Ethereum Deposit Tracker

## Overview

This application tracks Ethereum deposits made to the Beacon Deposit Contract (0x00000000219ab540356cBB839Cbe05303d7705Fa ). It records deposit details to MongoDB and sends notifications via Telegram.

## Prerequisites

- **Node.js**: Version 14 or higher
- **npm** (Node Package Manager)

## Setup and Installation

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/15rohan/eth-deposit-tracker.git
cd eth-deposit-tracker
```

### 2. Install Dependencies
Install the necessary dependencies using `npm`:

```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the `backend` directory of your project. This file will store sensitive information and configuration settings.

Add the following environment variables to the .env file:

```bash
PORT=your-port
ALCHEMY_API_KEY=your-alchemy-api-key
MONGO_URI=your-mongodb-uri
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_CHAT_ID=your-telegram-chat-id
```

Replace the placeholder values with your actual configuration details.

### 4.  Setup MongoDB
Ensure MongoDB is running and accessible. If using MongoDB Atlas, make sure your URI in the `.env` file is correct. You can use a local instance or a cloud-based MongoDB service.

### 5. Update and Verify Contract Address
Update the `BEACON_DEPOSIT_ADDRESS` in your `.env` file if needed:

```bash
BEACON_DEPOSIT_ADDRESS=your-beacon-deposit-contract-address
```

### 6. Running the Application
To start monitoring for deposits, navigate to the `backend` directory and start the application using:

```bash
cd backend
npm start
```

### 7. Set Up Telegram Notifications

If you have configured Telegram notifications, the bot will send alerts to the specified chat when a new deposit is detected.