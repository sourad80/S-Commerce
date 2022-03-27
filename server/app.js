const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.options('*', cors())

//middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))

require('dotenv/config')

//Routes
const categoriesRoutes = require('./routes/categories')
const productsRoutes = require('./routes/products')
const usersRoutes = require('./routes/users')
const ordersRoutes = require('./routes/orders')

const api = process.env.API_URL

app.use(`${api}/categories`, categoriesRoutes)
app.use(`${api}/products`, productsRoutes)
app.use(`${api}/users`, usersRoutes)
app.use(`${api}/orders`, ordersRoutes)

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 's-commerce'
  })
  .then(() => {
    console.log('Connection Ready!!')
  })
  .catch(err => {
    console.log('ERROR: ', err)
  })

app.get('/', (req, res) => {
  res.send('<h1>Welcome to S-commerce backend!!!!</h1>')
})

app.listen(5000, () => {
  console.log('Server is running http://localhost:5000')
})
