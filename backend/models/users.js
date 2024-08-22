const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    count: { type: Number, default: 0 },
    lastLogin: { type: Date, default: Date.now },
});

module.exports = mongoose.model('users', UserSchema);
