const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb')
const app = express()

const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express())

app.get('/', (req, res) => {
    res.send('hello world')
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9qavk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

async function run() {
    try {

    }
    finally {

    }
}
run().catch(console.dir)

app.listen(port, () => {
    console.log('form server', port)
})