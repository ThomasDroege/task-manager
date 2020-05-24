// CRUD create read update delet

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// Deprecated constructor to MongoClient
// useNewUrlParser: true 
MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    } 

    const db = client.db(databaseName)

//  db.collection('users').updateOne({
//         _id: new ObjectID("5ec6c1b5d3458e2a88aab6db")
//     }, {
//         $inc:{
//             age: -10
//         }
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) =>{
//         console.log(error)
//     })

    // db.collection('users').deleteMany({
    //     age: 22
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    db.collection('task').deleteOne({
        _id: new ObjectID("5ec6c0fe8b352909302b4d53")
    }).then((result) =>{
        console.log(result)
    }).catch((error) =>{
        console.log(error)
    })
    
})