const express = require('express');
const db = require('./lib/database'); // Import database connection
const path = require('path');
const app = express();
const PORT = 8000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, images, etc.)
app.use(express.static(path.join(__dirname)));

// Endpoint to record a click
app.post('/track-click', (req, res) => {
    const { elementId } = req.body;
    // Insert query
    const query = "INSERT INTO clicks (clicked_element, clicked_time) VALUES (?, NOW())";

    db.query(query, [elementId], (err, result) => {
        if (err) {
            console.error('Error saving click data:', err);
            return res.status(500).json({ error: 'Error saving click data' });
        }
        res.json({ message: 'Click data saved successfully', id: result.insertId });
    });
});

// Endpoint to fetch click data, optionally filtered by an id query parameter
app.get('/api/getClicks', (req, res) => {
    const id = req.query.id;
    // Select query
    let query = "SELECT * FROM clicks";
    let queryParams = [];
    if (id) {
        query += " WHERE id = ?";
        queryParams.push(id);
    }
    db.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Error fetching click data:', err);
            return res.status(500).json({ error: 'Error fetching click data' });
        }
        res.json(results);
    });
});

// Serve hellopanda.html as the default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'hellopanda.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`HTTP Server Starting on port ${PORT}!`);
});