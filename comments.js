// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/comments', (req, res) => {
    res.json({ comments: [
        'This is a comment',
        'This is another comment',
        'This is yet another comment'
    ] });
});

// Start web server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});