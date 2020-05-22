const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})