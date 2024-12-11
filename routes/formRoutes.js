const express = require('express');
const router = express.Router();
const Form = require('../models/Form');
const Response = require('../models/Response');

// Create a new form
router.post('/create', async (req, res) => {
    try {
        const form = new Form(req.body);
        await form.save();
        res.status(201).json({ message: 'Form created successfully', form });
    } catch (error) {
        res.status(500).json({ message: 'Error creating form', error });
    }
});

// Get all forms
router.get('/', async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching forms', error });
    }
});

// Get a single form by ID
router.get('/:id', async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (!form) return res.status(404).json({ message: 'Form not found' });
        res.status(200).json(form);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching form', error });
    }
});

module.exports = router;
