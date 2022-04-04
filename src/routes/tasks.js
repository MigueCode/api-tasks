const { Router } = require('express')
const router = Router()
const controller = require("../controllers/tasks")

router.get("/tasks", controller.getTasks)

router.post("/tasks", controller.postTask)

router.put("/tasks/:id", controller.putTask)

router.delete("/tasks/:id", controller.deleteTask)

module.exports = router