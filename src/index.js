const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port =process.env.port || 3000

//automatically parse incoming json to an object, for e.g. access it in request-handler
app.use(express.json())
app.use([userRouter, taskRouter])

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password  ='Red12345!'
    const hashedPassword  = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare(password, hashedPassword)
    console.log(isMatch)
}

myFunction()