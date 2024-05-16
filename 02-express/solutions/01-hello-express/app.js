const express = require('express')
const app = express()

// Root route sends a general greeting
app.get('/', (req, res) => {
    res.send('Hello Express')
})

// Route with path parameter for personalized greeting
app.get('/hello/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello, ${name}!`)
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))