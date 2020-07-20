const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    project:{
        type: String
    },
    task_name: {
        type: String
    },
    email: {
        type: String,
        // require: true
    },
    Details: {
        type: String,
        // require: true
    },
    datee: { 
        type: Date,
        // default: Date.now
    },
    date: { 
        type: String,
        // require: true
    },
    first_name: {
        type: String,
        // require: true
    },
    status: {
        type: String,
        // default: 'pending'
    },
    comment: {
        type: [
            {
                _id: false,
                date: Date,
                email: String,
                comment: String
            }
        ]
    },
    productImage: { type: String }

})

module.exports = mongoose.model('tasks', TaskSchema)