
// Create web server
const express = require('express');
const app = express();

// Add middleware to parse JSON data
app.use(express.json());

// Create in-memory database
const comments = [];

// Route to add new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send(comment);
});

// Route to get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Start web server
app.listen(3000, () => console.log('Listening on port 3000...'));