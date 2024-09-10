const Deposit = require('../models/deposit');
const provider = require('../config/alchemy');

const beaconDepositAddress = '0x00000000219ab540356cBB839Cbe05303d7705Fa';

const recordDeposit = async (deposit) => {
    try {
        // Checking for existing Deposit in DB
        const existingDeposit = await Deposit.findOne({ hash: deposit.hash });
        if (existingDeposit) {
            console.log('Deposit already exists:', deposit.hash);
            return;
        }
        const newDeposit = new Deposit(deposit);
        await newDeposit.save();
        console.log('Deposit saved:', deposit.hash);
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate hash error
            console.log('Deposit already exists:', deposit.hash);
        } else {
            console.error('Error saving deposit:', error);
        }
    }
};

const monitorDepositBeacon = async () => {
    try {
        // Creating a filter to listen for events at the Beacon Deposit Contract
        const filter = {
            address: beaconDepositAddress
        };

        // Listening for logs that match the filter
        provider.on(filter, async (log) => {
            try {
                // Fetching transaction details
                const txDetails = await provider.getTransaction(log.transactionHash);
                const block = await provider.getBlock(log.blockNumber);

                // Converting Unix timestamp to ISO string
                const blockTimestamp = new Date(block.timestamp * 1000).toISOString();

                // Creating the deposit object
                const deposit = {
                    blockNumber: log.blockNumber,
                    blockTimestamp: blockTimestamp,
                    fee: txDetails.gasPrice.mul(txDetails.gasLimit).toString(), // Fee in wei
                    hash: log.transactionHash,
                    pubkey: log.data
                };

                // Storing the deposit in MongoDB
                await recordDeposit(deposit);
            } catch (error) {
                console.error('Error processing log:', error);
            }
        });
    } catch (error) {
        console.error('Error setting up deposit monitoring:', error);
    }
};

module.exports = monitorDepositBeacon;

