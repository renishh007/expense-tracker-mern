const mongoose = require('mongoose');
const dns = require('dns');

const connectDB = async () => {
  try {
    dns.setServers(['8.8.8.8']);
    console.log(`Connecting to: ${process.env.MONGO_URI}`);
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
}

module.exports = connectDB;