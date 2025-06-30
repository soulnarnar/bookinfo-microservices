const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 8080;

// Dummy reviews data
const reviews = [
  { id: 1, productId: 1, content: "Great!", reviewer: "Alice" },
  { id: 2, productId: 1, content: "Not bad.", reviewer: "Bob" },
  { id: 3, productId: 1, content: "Could be better.", reviewer: "Charlie" }
];

app.get('/reviews/:productId', async (req, res) => {
  const productId = parseInt(req.params.productId, 10);
  const productReviews = reviews.filter(r => r.productId === productId);

  // Fetch ratings for each review
  const reviewsWithRatings = await Promise.all(productReviews.map(async review => {
    try {
      const response = await fetch(`http://ratings:3000/ratings/${review.id}`);
      const rating = await response.json();
      return { ...review, rating };
    } catch {
      return { ...review, rating: null };
    }
  }));

  res.json(reviewsWithRatings);
});

app.listen(port, () => {
  console.log(`Reviews service running at http://localhost:${port}`);
});