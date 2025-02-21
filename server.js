require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Azure App Service! 🚀');
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Service is running!' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
