const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello express')
})

app.get('/contact', (req, res) => {
    res.send('Contact express')
})

app.get('/:name', (req, res) => {
    res.send(`Name ${req.params.name}`)
})


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})