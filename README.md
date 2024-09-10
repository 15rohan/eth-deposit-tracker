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
Install the necessary dependencies using npm:

```bash
npm install
```

### 3. Environment Configuration
Create a .env file in the 'backend' directory of your project. This file will store sensitive information and configuration settings.

Add the following environment variables to the .env file:

```bash
ALCHEMY_API_KEY=your-alchemy-api-key
MONGODB_URI=your-mongodb-uri
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_CHAT_ID=your-telegram-chat-id
```

### 3. Environment Configuration
Create a .env file in the 'backend' directory of your project. This file will store sensitive information and configuration settings.

Add the following environment variables to the .env file:

```bash
ALCHEMY_API_KEY=your-alchemy-api-key
MONGODB_URI=your-mongodb-uri
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_CHAT_ID=your-telegram-chat-id
```

Replace the placeholder values with your actual configuration details:

ALCHEMY_API_KEY: Your Alchemy API key.
MONGODB_URI: Your MongoDB connection URI.
TELEGRAM_BOT_TOKEN: Your Telegram bot token (if using Telegram notifications).
TELEGRAM_CHAT_ID: Your Telegram chat ID (if using Telegram notifications).