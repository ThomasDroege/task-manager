const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }

})

// const me = new User({
//     name: 'Thomas',
//     age: 32
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const newTask = new Task({
    description: 'Cleaning the house',
    stage: false
})

newTask.save().then(() => {
    console.log(newTask)
}).catch((error) =>{
    console.log('Error!', error)
})