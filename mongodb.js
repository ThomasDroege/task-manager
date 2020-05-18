// CRUD create read update delet

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// Deprecated constructor to MongoClient
// useNewUrlParser: true 
MongoClient.connect(connectionURL, { useUnifiedTopology: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    } 

    const db = client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     name: 'Thomas',
    //     age: 32
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)

    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Leonie',
    //         age: 31
    //     }, {
    //         name: 'Tom',
    //         age: 33
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }
    //         console .log(result.ops)
    // })

    db.collection('task').insertMany([
        {
            description: 'First task',
            completed: true
        }, {
            description: 'Homeworks',
            completed: false
        }, {
            description: 'cooking',
            completed: false
        }
    ], (error, result) => {
        if(error){
            return console.log('Unable to insert documents!')
        } else{
            console.log(result.ops)
        }
    })
})