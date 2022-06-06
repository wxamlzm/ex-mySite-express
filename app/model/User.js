const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    nickname: { type: String, require: true },
    isAdmin: { type: String, default: '0' },
});

const User = model('User', UserSchema);

module.exports = User;
