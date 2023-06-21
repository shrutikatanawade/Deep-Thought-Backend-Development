
const express = require('express');
const app = express();
const port = 3000;

// Set up routes
const eventsRoutes = require('./routes/events');

// Use event routes
app.use('/api/v3/app/events', eventsRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
