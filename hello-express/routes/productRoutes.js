const express = require("express");

const router = express.Router();

let products = [
    { id: 1, title: "Wireless Mouse", price: 25 },
    { id: 2, title: "Bluetooth Speaker", price: 45 },
    { id: 3, title: "Smart Watch", price: 150 },
  ];

router.get("/", (req, res) => {
    res.status(200).json(products);
});

router.get("/:id", (req, res) => {
    const product = products.find((product) => {
        product.id === Number(req.params.id);
    })
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(200).send('No product found');
    }
});

router.post("/", (req, res) => {
    const { title, price } = req.body
    if (title && price) {
        products.push({
            id: products[products.length -1].id + 1,
            title: title,
            price: price
        })

        res.status(201).json(products[products.length - 1]);
    } else {
        res.status(400).send("missing title or price");
    }
});

router.put("/:id", (req, res) => {
    const { title, price } = req.body;
    const product = products.find((product) => product.id === Number(req.params.id))
    if (product) {
        if (title && title !== product.title) product.title = title;
        if (price && price !== product.price) product.price = price;
        res.status(200).json(product)
    } else {
        res.status(404).send("No product to update")
    }
});


router.delete("/:id", (req, res) => {
   const id = Number(req.params.id);
    const product = products.find((product) => product.id === id);

    if (product) {
        const index = products.findIndex((product) => product.id === id);
        if (index && index !== -1) {
            products.splice(index, 1);
            res.status(200).send("Product successfully deleted")
        }
    } else {
        res.status(404).send("No product to delete");
    }
});

const reviewRouter = require('./reviewRoutes');
router.use('/:productId/reviews', reviewRouter);

module.exports = router;