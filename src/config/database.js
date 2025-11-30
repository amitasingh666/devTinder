const mongoose = require("mongoose");

const connectDB = async() => {
    await mongoose.connect(
        "mongodb+srv://amitasingh:12344321@cluster0.wvpkxy2.mongodb.net/devTinder"
    );
};

module.exports = connectDB;
