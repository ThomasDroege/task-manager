const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port =process.env.port || 3000

//with middleware (app.use): new request -> app.use -> run route handler
// app.use((req, res, next) =>{ 
//     if(req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         //need to be executed to get to the next event (run route handler)
//         next()
//     }
// })

app.use((req, res, next) => {
    res.status(503).send('The page is under maintenance')
})

//automatically parse incoming json to an object, for e.g. access it in request-handler
app.use(express.json())
app.use([userRouter, taskRouter])

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {expiresIn: '7 days'})
    console.log(token)

    //same secret phrase need to be the second argument to verify the token
    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()