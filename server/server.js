const express = require ('express');
const dotenv = require('dotenv').config();
const itemRoutes = require('./routes/itemRoute')
const logger = require('./utils/logger');
const cors = require('cors');
const app = express();
const path = require('path');
const connectDB = require('./config/db');
dotenv.config;

connectDB();
app.use(express.json());
app.use(cors());

app.use('/api/items', itemRoutes)

app.get('/', (req,res)=> {
    res.send('API is running')
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, logger.info(`server started on PORT ${PORT}`))

module.exports = app;
