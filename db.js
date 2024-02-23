const { MongoClient } = require('mongodb')

let dbConnection
let uri = 'mongodb+srv://nguyentanbaole2004:Baobinh75@cluster0.uzdikkm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    }, 
    getDb: () => dbConnection
}