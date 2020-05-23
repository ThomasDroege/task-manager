require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5ec7f50aa20e80395449adb0').then(() => {
    return Task.countDocuments({ completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})