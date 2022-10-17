const mongoose = require("mongoose")

const connectDB = async() => {
    try {
        const cnObj = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected : ${cnObj.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)

        process.exit(1)
    }
}

module.exports = connectDB