const mongoose = require('mongoose');
// User schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    }

}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;
