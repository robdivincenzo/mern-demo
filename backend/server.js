const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/goals', (req, res) => {
    res.status(200).json({"message": "Get goals"});
});
 
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
