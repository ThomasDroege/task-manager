require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ec7f50aa20e80395449adb0').then(() => {
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: true})
    return count
}

deleteTaskAndCount('5ec80e5b9f4e1936d8999767').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})