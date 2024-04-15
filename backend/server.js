const express = require('express')
const dbConnect = require('./utils/db')
const Product = require('./model/product')
const cors = require('cors')

const app = express()
const port = 3456

app.use(cors())

app.use(express.json());

app.get('/', async (req, res) => {
    const product = await Product.find()
    res.send(product)
})

app.get('/:id', async(req, res) => {
    const id = req.params['id']
    const product = await Product.findById(id)
    res.send(product)
})

app.post('/', async(req, res) => {
    const { name,category, price, note } = req.body;
    const product = await Product.insertMany({
        name: name,
        category: category,
        price: price,
        note: note
    })
    res.send(product)
})

app.put('/:id', async(req, res) => {
    const id = req.params['id']
    const { name,category, price, note } = req.body;
    const product = await Product.updateOne(
        {
            _id: id
        },
        {
            $set: {
                name: name,
                category: category,
                price: price,
                note: note
            }
        }
    )
    res.send(product)
})

dbConnect().then((conn) => {
    conn.once("open", async () =>{
        app.listen(port, () => {
            console.log(`Listening to http://localhost:${port}`);
        })
    })
})