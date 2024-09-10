require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const helmet = require('helmet');
const cors = require('cors');
const rateLimiter = require('express-rate-limit');

const connectDB = require('./config/db');
const monitorDepositBeacon = require('./services/monitor');

app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
    })
);
app.use(express.json());
app.use(helmet());
app.use(cors());

const port = process.env.PORT || 8080;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI);
        monitorDepositBeacon();
        app.listen(port, ()=> console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();