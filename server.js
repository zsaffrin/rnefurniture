const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3009;

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.info(`RNE Furniture server listening on port ${port}`);
});

module.exports = app;
