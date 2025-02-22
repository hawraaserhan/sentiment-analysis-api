const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/analyze-sentiment', async (req, res) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/predict', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log('Express server running on port 3000');
});