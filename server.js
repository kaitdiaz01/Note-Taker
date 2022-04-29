const express = require('express');

//add required routes for the our api/html
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// initialize app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up some body parsing, static, and route the middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('',htmlRoutes);

app.listen(PORT, () => console.log(`This port is listening at ${PORT}`));