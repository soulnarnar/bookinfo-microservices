const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/details/:productId', (req, res) => {
    const productId = req.params.productId;
    // Here you would typically fetch product details from a database or another service
    res.json({ productId, name: 'Sample Product', description: 'This is a sample product description.' });
});

app.listen(port, () => {
    console.log(`Details service running at http://localhost:${port}`);
});