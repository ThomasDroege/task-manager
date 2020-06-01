const mongoose = require('mongoose')


// const Task = mongoose.model('Task', taskSchema)
// Use of Schema is necessary to use further options, e.g. timestamps
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // needs to be the same User like in the user model file
        // "const User = mongoose.model('User', userSchema)"
        ref: 'User'
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task