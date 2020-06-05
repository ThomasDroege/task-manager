const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port =process.env.port || 3000

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    }, 
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document'))
        }

        cb(undefined, true)
        
        // cb(new Error('File must be a PDF'))
        // cb(undefined, true)
        // cb(undefined, false)
    }
})

const errorMiddleware = (req, res, next) => {
    throw new Error('From my middleware')
}

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => { 
    res.status(400).send({error: error.message})
})


// app.use((req, res, next) => {
//     res.status(503).send('The page is under maintenance')
// })

//automatically parse incoming json to an object, for e.g. access it in request-handler
app.use(express.json())
app.use([userRouter, taskRouter])

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

