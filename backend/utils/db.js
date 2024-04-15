const mongoose = require('mongoose')
const dotenv = require('dotenv').config({path: '../.env'})
const dbUrl = process.env.DATABASE_URL

const dbConnect = async () => {
    try {
        mongoose.connect(dbUrl)
        console.log('mongodb Connected');
        return mongoose.connection
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect