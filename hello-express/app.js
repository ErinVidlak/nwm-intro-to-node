const express = require('express');
const cors = require('cors');

const app = express();

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index', { items: [1, 3, 5, 6, 9] });
});

const productRoutes = require('./routes/productRoutes')
app.use('/products', cors(), productRoutes);

app.use(express.json());

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