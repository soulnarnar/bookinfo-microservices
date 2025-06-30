<?php
// This is the entry point for the PHP microservice.
// It handles requests related to the product page and serves the necessary HTML or JSON responses.

header('Content-Type: application/json');

// Sample data for the product page
$product = [
    'id' => 1,
    'name' => 'Sample Product',
    'description' => 'This is a sample product description.',
    'price' => 29.99,
];

function get_service($url) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    if (curl_errno($ch)) {
        curl_close($ch);
        return null;
    }
    curl_close($ch);
    return $response;
}

// Fetch details from details service
$details = get_service('http://details:3000/details/1');
// Fetch reviews from reviews service
$reviews = get_service('http://reviews:8080/reviews/1');

// // Fetch details from details service
// $details = file_get_contents('http://details:3000/details/1');
// // Fetch reviews from reviews service
// $reviews = file_get_contents('http://reviews:8080/reviews/1');

// Aggregate and return as JSON
echo json_encode([
    'product' => $product,
    'details' => json_decode($details, true),
    'reviews' => json_decode($reviews, true)
]);
?>