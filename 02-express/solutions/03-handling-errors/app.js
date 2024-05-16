const express = require('express')
const app = express()

// A sample route that works correctly
app.get('/', (req, res) => {
    res.send('Hello, World!')
})

// A route that could cause a server error
app.get('/cause-error', (req, res, next) => {
    try {
        // Simulate an error
        const result = someUndefinedFunction()
        res.send(result)
    } catch (err) {
        next(err)  // Passes the error to the error-handling middleware
    }
})

// Middleware to catch 404 - Page Not Found
app.use((req, res, next) => {
    res.status(404).send('Requested resource not found')
})

// General error-handling middleware
app.use((err, req, res, next) => {
    console.error(err)  // Log detailed error for admin
    res.status(500).send('Something went terribly wrong!')
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
