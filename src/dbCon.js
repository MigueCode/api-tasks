const mongo = require('mongoose')
require('dotenv').config()

const uri = process.env.DB_CONNECTION

const mongoCon = async () => {
    try {
        const db = await mongo.connect(uri)

        console.log(`Connection with ${db.connection.name}`);
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = mongoCon