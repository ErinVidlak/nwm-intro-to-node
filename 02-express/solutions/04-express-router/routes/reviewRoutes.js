const express = require('express');
const router = express.Router({ mergeParams: true });

// Simulated database for reviews
let reviews = [
    { productId: 1, reviewId: 1, content: 'Great product!' },
    { productId: 1, reviewId: 2, content: 'Very comfortable.' },
    { productId: 2, reviewId: 1, content: 'Sounds clear, good bass.' }
];

router.get('/', (req, res) => {
    const { productId } = req.params;
    const productReviews = reviews.filter(r => r.productId === parseInt(productId));
    res.status(200).json(productReviews);
});

router.post('/', (req, res) => {
    const { content } = req.body;
    const { productId } = req.params;
    const review = { productId: parseInt(productId), reviewId: reviews.length + 1, content };
    reviews.push(review);
    res.status(201).json(review);
});

router.delete('/:reviewId', (req, res) => {
    const { productId, reviewId } = req.params;
    const index = reviews.findIndex(r => r.productId === parseInt(productId) && r.reviewId === parseInt(reviewId));
    if (index === -1) {
        return res.status(404).send('Review not found');
    }
    reviews.splice(index, 1);
    res.status(204).send();
});

module.exports = router;
