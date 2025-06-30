# Microservices Application

This project is a microservices architecture consisting of four distinct services: Product Page, Details, Ratings, and Reviews. Each service is implemented using different technologies and can be deployed independently.

## Microservices Overview

1. **Product Page**
   - **Technology**: PHP
   - **Description**: Handles requests related to the product page and serves HTML or JSON responses.
   - **Directory**: `productpage/`
   - **Entry Point**: `productpage/src/index.php`
   - **Dockerfile**: `productpage/Dockerfile`

2. **Details**
   - **Technology**: Python
   - **Description**: Manages requests related to product details and serves the necessary data.
   - **Directory**: `details/`
   - **Entry Point**: `details/src/app.py`
   - **Dockerfile**: `details/Dockerfile`

3. **Ratings**
   - **Technology**: JavaScript
   - **Description**: Handles requests related to product ratings and serves the necessary data.
   - **Directory**: `ratings/`
   - **Entry Point**: `ratings/src/index.js`
   - **Dockerfile**: `ratings/Dockerfile`

4. **Reviews**
   - **Technology**: JavaScript
   - **Description**: Manages requests related to product reviews.
   - **Directory**: `reviews/`
   - **Entry Point**: `reviews/src/index.js`
   - **Dockerfile**: `reviews/Dockerfile`

## Setup Instructions

To set up and run the microservices application, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   ```

2. **Build and Run Microservice**
   - Navigate to root directory and build the Docker image:
     ```bash
     docker compose build
     docker compose up -d
     ```

3. **Access the Microservices**
   - Product Page: `http://localhost:8080`

## Additional Information

Refer to the individual `README.md` files in each microservice directory for more specific setup instructions and usage details.

## Microservice Interaction Structure
- productpage (Home Page)
  - Calls:
    - details (to get product details)
    - reviews (to get product reviews)
- reviews
  - Calls:
    - ratings (to get ratings for a review)
- ratings
  - Only accessible via reviews (not directly from productpage)
- details
  - Only accessible via productpage