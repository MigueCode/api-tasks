const task = require('../models/tasks')

exports.getTasks = async (req, res) => {
    try {

        const tasks = await task.find()
        res.json(tasks)

    } catch (error) {
        console.log(error);
    }
}

exports.postTask = async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        
        if (Object.keys(data).length === 0) {
            return false
        }
        
        const taskToAdd = new task(data)

        await taskToAdd.save()

        console.log(taskToAdd);

        res.sendStatus(200)

    } catch (error) {
        console.log(error);
    }
}

exports.putTask = async (req, res) => {

    try {
        const id = req.params.id
        const data = req.body

        console.log(id, data)

        if (!id || Object.keys(data).length === 0) {
            return false
        }

        await task.findByIdAndUpdate(id, data)

        res.sendStatus(200)

    } catch (error) {
        console.log(error);
    }

}

exports.deleteTask = async (req, res) => {
    
    
    try {
        
        const id = req.params.id
        console.log(id)
        await task.findByIdAndDelete(id)
        res.sendStatus(200)

    } catch (error) {
        console.log(error);
    }

}