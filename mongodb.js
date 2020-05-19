// CRUD create read update delet

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// Deprecated constructor to MongoClient
// useNewUrlParser: true 
MongoClient.connect(connectionURL, { useUnifiedTopology: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    } 

    const db = client.db(databaseName)

    db.collection('users').findOne({ _id: new ObjectID("5ec428679c6dd436e402427f")}, (error, user) =>{
        if(error){
            return console.log('Unable to fetch user')
        }
        
        console.log(user)
    })
    
    //gives back a pointer/cursor and save it to array 
    db.collection('users').find({age: 32}).toArray( (error, users) => {
       console.log(users) 
    })

    //gives back a pointer/cursor and save it to a number (less consumption of ram i guess)
    db.collection('users').find({age: 32}).count( (error, count) => {
        console.log(count) 
     })

     db.collection('task').findOne({_id: new ObjectID("5ec2ed861dfc3a231cedba0a")}, (error, task) =>{
         if(error){
             return console.log('Unable to fetch task')
         }

         console.log(task)
     })
   
     db.collection('task').find({completed: false}).toArray( (error, tasks) => {
         console.log(tasks)
     })
})