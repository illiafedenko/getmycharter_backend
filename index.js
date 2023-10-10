const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();
const PORT = process.env.PORT;

// Set up the Express app
const app = express();
app.use(bodyParser.json());

// Routes
const router = require('./app/routes');
app.use('/api/v1/', router);

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
