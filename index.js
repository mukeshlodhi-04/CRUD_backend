require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route')

const app = express()
app.use(express.json());

PORT = process.env.PORT;

app.use('/api/products',productRoute);

app.get('/', (req, res) => {
    res.send("testing ")
  })

mongoose.connect('mongodb+srv://Mukesh:mukesh2022@crud.fnv9n.mongodb.net/CRUD')
  .then(() => {console.log('Connected!')})
  .catch(()=> console.log('not connected'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})