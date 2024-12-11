const express = require('express');
const router = express.Router();
const Response = require('../models/Response');

// Submit a response
router.post('/submit', async (req, res) => {
    try {
        const response = new Response(req.body);
        await response.save();
        res.status(201).json({ message: 'Response submitted successfully', response });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting response', error });
    }
});

// Get responses for a specific form
router.get('/:formId', async (req, res) => {
    try {
        const responses = await Response.find({ formId: req.params.formId });
        res.status(200).json(responses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching responses', error });
    }
});

module.exports = router;
