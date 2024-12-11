const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes');
const responseRoutes = require('./routes/responseRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://amitnaik0807:5gpUrJN56UgvdJxL@cluster0.vpo8b.mongodb.net/')
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB Atlas:', err);
    });


// Routes
// const formRoutes = require('./routes/formRoutes');
// const responseRoutes = require('./routes/responses');

app.use('/api/forms', formRoutes);
app.use('/api/responses', responseRoutes);


// Start Server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});