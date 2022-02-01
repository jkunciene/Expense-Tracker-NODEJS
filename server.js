const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const transactions = require('./routes/transactions');

const app = express();

app.use('/api/v1/transactions', transactions);

app.get('/', (req, res) => res.send("Hello #myStudents"));


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
