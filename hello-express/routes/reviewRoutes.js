const express = require("express");

const router = express.Router({ mergeParams: true });

let reviews = [
    { id: 1, productId: 1, content: 'Great product!' },
    { id: 2, productId: 1, content: 'Very comfortable.' },
    { id: 3, productId: 2, content: 'Sounds clear, good bass.' }
]

router.get('/', (req, res) => { // /products/:productId/reviews/
    const productReviews = reviews.filter(
        (review) => review.productId === Number(req.params.productId)
    );
    if (productReviews.length !== 0) {
        res.status(200).json(productReviews)
    } else {
        res.status(204).send("No reviews found");
    }
});

router.post('/', (req, res) => {
    const {productId} = req.params
    const {content} = req.body
    if (productId && content) {
        const newReview = {
            id: reviews[reviews.length - 1].id + 1,
            productId: Number(productId),
            content: content
        }
        reviews.push(newReview)
        res.status(201).json(newReview)
    } else {
        res.status(400).send("must provide valid productID and content")
    }
})

module.exports = router;