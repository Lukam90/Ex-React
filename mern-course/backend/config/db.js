const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const mongoConnect = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB connected: ${mongoConnect.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error : ${error}`)

        process.exit(1)
    }
}

module.exports = connectDB