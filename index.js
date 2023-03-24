const express = require('express');

const app = express();

const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    console.log('New request');
    res.status(200).json({ status: true });
});

app.listen(PORT, () => {
    console.log('Server is running');
});