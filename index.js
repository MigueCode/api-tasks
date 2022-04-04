const app = require('./src/app')

app.listen(app.get("port"), () => {
    console.log(`App ${app.get("name")} in use in port ${app.get("port")}`)
})