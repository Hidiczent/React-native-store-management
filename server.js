const express = require('express');
const app = express();

const port = process.env.PORT || 4200; // Change the port to 3601 or any other available port

app.get('/', (req, res) => {
  res.send('Server opened!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});