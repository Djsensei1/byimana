// Import the express library
const express = require('express');

// Create an express application
const app = express();

// Define the port to run the server on
const port = 3000;

// Serve static files from the Public directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
