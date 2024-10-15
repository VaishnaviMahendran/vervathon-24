// server.js
const express = require('express');
const axios = require('axios');  // To make requests to Meshy AI API
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Endpoint to handle text prompt and interact with Meshy AI
app.post('/generate-3d-model', async (req, res) => {
    const { prompt } = req.body;  // Text prompt from client-side

    if (!prompt) {
        return res.status(400).send({ error: 'Text prompt is required' });
    }

    try {
        // Replace with actual Meshy AI API URL and your API key
        const apiUrl = 'https://api.meshy.ai';
        const apiKey = 'msy_R6JfDaDwgFGvuoaP5s7eDOePVMpJr0TPrGqS'; // Get this from Meshy AI's dashboard

        // Make a request to Meshy AI API with the text prompt
        const response = await axios.post('https://api.meshy.ai', {
            prompt: prompt,
        }, 
        {
            headers: {
                'Authorization': `Bearer msy_R6JfDaDwgFGvuoaP5s7eDOePVMpJr0TPrGqS9 `,
                'Content-Type': 'application/json'
            }
        });

        // Return the 3D model link or data to the frontend
        res.json({
            modelUrl: response.data.modelUrl,  // Assuming the API returns a URL to the generated 3D model
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Error generating 3D model' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
