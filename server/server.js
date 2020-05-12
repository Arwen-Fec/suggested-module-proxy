const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 2000;

app.use(express.static(path.join(__dirname, '/../public')));
app.use('/:id', express.static(path.join(__dirname, '/../public')))

app.use('/products/:id', createProxyMiddleware({target: 'http://localhost:4000', changeOrigin: true}));
app.use('/get/random', createProxyMiddleware({target: 'http://localhost:4000', changeOrigin: true}));
app.use('/product/:id', createProxyMiddleware({target: 'http://localhost:4200', changeOrigin: true}));
app.use('/reviews/:id', createProxyMiddleware({target: 'http://localhost:5000', changeOrigin: true}));
app.use('/api/carousel/:id', createProxyMiddleware({target: 'http://localhost:9000', changeOrigin: true}));
app.use('/api/carouselEnlarged/:id', createProxyMiddleware({target: 'http://localhost:9000', changeOrigin: true}));

app.listen(port, (err) => {
  console.log(`Server is running on port ${port}!`);
});