const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port =process.env.port || 3000

// app.use((req, res, next) => {
//     res.status(503).send('The page is under maintenance')
// })

//automatically parse incoming json to an object, for e.g. access it in request-handler
app.use(express.json())
app.use([userRouter, taskRouter])

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5eceb9a418df2222d4fb0b23')
    // // mongoose helper function to get the back the specitic user object related to the given id
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // const user = await User.findById('5ed38a41f8a555573888b197')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
}

main()