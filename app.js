const express = require('express');
const app = express();
const { calculateSaturnScore } = require('./src/saturnCalculator');

// ...existing middleware and routes...

// New endpoint to calculate Saturn score from a provided "value" query parameter.
app.get('/calculate', (req, res) => {
    const value = parseFloat(req.query.value);
    if (isNaN(value)) {
        return res.status(400).json({ error: 'Invalid or missing "value" parameter' });
    }
    const score = calculateSaturnScore(value);
    res.json({ score });
});

// ...existing code...
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
