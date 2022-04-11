const express = require('express')
const morgan = require('morgan')
const app = express()
const router = require('./routes/tasks')
const conDb = require('./dbCon')
const cors = require('cors')

conDb()

app.set("name", "Api REST Tasks")
app.set("port", process.env.PORT || 3500)

app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.use(morgan("dev"))

app.use(express.static("public"))

app.use("/api", router)

module.exports = app