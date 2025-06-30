const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let ratings = [
    { productId: 1, reviewId: 1, rating: 4.5 }, 
    { productId: 1, reviewId: 2, rating: 3.8 },
    { productId: 1, reviewId: 3, rating: 2.0 },
];

app.get('/ratings/:reviewId', (req, res) => {
    const reviewId = parseInt(req.params.reviewId, 10);
    const rating = ratings.find(r => r.reviewId === reviewId);
    if (rating) {
        res.json(rating);
    } else {
        res.json(null);
    }
});

app.post('/ratings', (req, res) => {
    const { productId, rating } = req.body;
    if (!productId || rating === undefined) {
        return res.status(400).json({ error: 'Product ID and rating are required' });
    }
    ratings.push({ productId, rating });
    res.status(201).json({ message: 'Rating added successfully' });
});

app.listen(PORT, () => {
    console.log(`Ratings service is running on port ${PORT}`);
});