const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Port for the server

// Import and configure security middleware
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

// Apply security middleware
app.use(helmet()); // Helmet helps secure your application by setting various HTTP headers
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS) for your API
app.use(bodyParser.json()); // Parse JSON request bodies

// Define your routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});