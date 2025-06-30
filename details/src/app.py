from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/details/<product_id>', methods=['GET'])
def get_product_details(product_id):
    # Here you would typically fetch product details from a database or another service
    return jsonify({
        'productId': product_id,
        'name': 'Sample Product',
        'description': 'This is the details description for a sample product!'
    })

if __name__ == '__main__':
    port = 3000
    app.run(host='0.0.0.0', port=port)