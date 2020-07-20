const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    // full_name:{
    //     type: String,
    //     require: true
    // },
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    addadmin: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    Bio: {
        type: String,
        require: true
    },
    dob: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },

})

module.exports = mongoose.model('users', UserSchema)