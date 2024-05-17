const express = require('express')
const app = express()

// Set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', './views')

// Define server-side data with products
let products = [
    { name: 'Smartphone', description: 'Latest model with advanced features and an improved camera.' },
    { name: 'Laptop', description: 'Lightweight, high-performance laptop suitable for both work and play.' },
    { name: 'Wireless Headphones', description: 'Noise-cancelling headphones with long battery life and superior sound quality.' }
]

// Route that renders the index template with products
app.get('/', (req, res) => {
    res.render('index', { items: products })
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
