const express = require('express')
const router = express.Router()

// Simulated database for products
let products = [
  { id: 1, title: 'Wireless Mouse', price: 25 },
  { id: 2, title: 'Bluetooth Speaker', price: 45 },
  { id: 3, title: 'Smart Watch', price: 150 },
]

router.get('/', (req, res) => {
  let { priceMin, priceMax, sort } = req.query
  let filteredProducts = products

  if (priceMin || priceMax) {
    priceMin = priceMin || 0
    priceMax = priceMax || Number.MAX_SAFE_INTEGER
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= priceMin && p.price <= priceMax
    )
  }

  if (sort) {
    filteredProducts = filteredProducts.sort((a, b) => {
      if (sort === 'price') {
        return a.price - b.price
      } else if (sort === 'name') {
        return a.title.localeCompare(b.title)
      }
    })
  }

  res.status(200).json(filteredProducts)
})

router.get('/:id', (req, res) => {
  const product = products.find(
    (product) => product.id === Number(req.params.id)
  )
  console.log(req.params)
  if (product) {
    res.status(200).json(product)
  } else {
    res.status(204)
  }
})

router.post('/', (req, res) => {
  const { title, price } = req.body
  const product = {
    id: products[products.length - 1].id + 1,
    title,
    price,
  }
  products.push(product)
  res.status(201).json(product)
})

router.put('/:id', (req, res) => {
  const { title, price } = req.body

  const product = products.find(
    (product) => product.id === Number(req.params.id)
  )

  if (product) {
    if (title && title !== product.title) product.title = title

    if (price && price !== product.price) product.price = price

    res.status(200).json(product)
  } else {
    res.status(404).send('Product not found')
  }
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  const index = products.findIndex((product) => product.id === Number(id))
  if (index !== -1) {
    products.splice(index, 1)
    res.status(200).send('Product deleted successfully')
  } else {
    // Product does not exist
    res.status(404).send('Product not found')
  }
})

// Import and use nested reviews router
const reviewRouter = require('./reviewRoutes')
router.use('/:productId/reviews', reviewRouter)

module.exports = router
