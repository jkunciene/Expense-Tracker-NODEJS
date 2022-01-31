const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config/cinfig.env' });

const app = express();

app.get('/', (req, res) => res.send("Hello #myStudents"));

app.listen();
