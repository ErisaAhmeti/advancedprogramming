const request = require('supertest');
const app = require('../../src/app');

describe('Product API Routes', () => {
  // Valid API key for tests
  const validApiKey = 'test-api-key';

  // Test GET /api/products
  describe('GET /api/products', () => {
    it('should return 401 if no API key is provided', async () => {
      const res = await request(app).get('/api/products');
      expect(res.statusCode).toEqual(401);
    });

    it('should return a list of products with valid API key', async () => {
      const res = await request(app)
        .get('/api/products')
        .set('X-API-Key', validApiKey);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('products');
      expect(Array.isArray(res.body.products)).toBe(true);
    });

    it('should apply filters correctly', async () => {
      const filters = { category: 'electronics', priceRange: [100, 500] };
      const res = await request(app)
        .get('/api/products')
        .set('X-API-Key', validApiKey)
        .query(filters);

      console.log(res.body.products); // Shto për debug

      expect(res.statusCode).toEqual(200);
      expect(res.body.products.every(product => product.category === 'electronics')).toBe(true);
      expect(res.body.products.every(product => product.price >= 100 && product.price <= 500)).toBe(true);
    });
  });

  // Test POST /api/products
  describe('POST /api/products', () => {
    it('should return 400 for invalid product data', async () => {
      const invalidProduct = { name: '', price: -1 }; // Invalid product data
      const res = await request(app)
        .post('/api/products')
        .set('X-API-Key', validApiKey)
        .send(invalidProduct);

      expect(res.statusCode).toEqual(400);
    });

    it('should create a new product successfully', async () => {
      const newProduct = { name: 'Phone', price: 299, category: 'electronics' };
      const res = await request(app)
        .post('/api/products')
        .set('X-API-Key', validApiKey)
        .send(newProduct);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.name).toBe('Phone');
      expect(res.body.price).toBe(299);
    });
  });

  // Test PUT /api/products/:id
  describe('PUT /api/products/:id', () => {
    it('should update a product successfully', async () => {
      const updatedProduct = { name: 'Updated Laptop', price: 599 };
      const res = await request(app)
        .put('/api/products/1')
        .set('X-API-Key', validApiKey)
        .send(updatedProduct);

      expect(res.statusCode).toEqual(200);
      expect(res.body.name).toBe('Updated Laptop');
      expect(res.body.price).toBe(599);
    });

    it('should return 404 for non-existent product', async () => {
      const updatedProduct = { name: 'Non-existent product', price: 999 };
      const res = await request(app)
        .put('/api/products/999')
        .set('X-API-Key', validApiKey)
        .send(updatedProduct);

      expect(res.statusCode).toEqual(404);
    });
  });

  // Test DELETE /api/products/:id
  describe('DELETE /api/products/:id', () => {
    it('should delete a product successfully', async () => {
      const res = await request(app)
        .delete('/api/products/1')
        .set('X-API-Key', validApiKey);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toBe('Product deleted successfully');
    });

    it('should return 404 for non-existent product', async () => {
      const res = await request(app)
        .delete('/api/products/999')
        .set('X-API-Key', validApiKey);

      expect(res.statusCode).toEqual(404);
    });
  });
});
