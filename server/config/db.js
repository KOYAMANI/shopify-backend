const mongoose = require('mongoose');
const logger = require('../utils/logger')

const connectionString = process.env.MONGO_URL


const connectDB = async () => {
    try {
        const connect = await mongoose.connect(
            connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        logger.info(`MongoDB connected: ${connect.connection.host}`)
    } catch (error){
        logger.error(`Error: ${error}`)
        process.exit();
    }
}

module.exports = connectDB;