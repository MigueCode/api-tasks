const express = require('express')
const morgan = require('morgan')
const app = express()
const router = require('./routes/tasks')
const conDb = require('./dbCon')

conDb()

app.set("name", "Api REST Tasks")
app.set("port", process.env.PORT || 3500)

app.use(express.json())
app.use(morgan("dev"))

app.use(express.static("public"))

app.use("/api", router)

module.exports = app