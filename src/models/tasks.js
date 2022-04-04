const { Schema, model } = require('mongoose')

const tasksSchema = new Schema({
    task: String
})

module.exports = model("task", tasksSchema)