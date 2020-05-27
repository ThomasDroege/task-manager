const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
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
})

module.exports = Task