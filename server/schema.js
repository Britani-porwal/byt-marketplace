const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    project: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;