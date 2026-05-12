const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Mock API endpoint for Future AI Agents
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        agents: 11,
        message: 'OmniCare MCP Backend is ready for orchestration.'
    });
});

// Fallback to lock.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'lock.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
