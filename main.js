const express = require('express');
const app = express();
const port = 3000; // You can use any port you prefer

// Define your other routes here

// Define the undefined route to return a 404 response
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
