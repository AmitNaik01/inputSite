const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
    formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
    answers: [
        {
            questionId: { type: mongoose.Schema.Types.ObjectId, required: true },
            answer: mongoose.Schema.Types.Mixed, // Text, array, or other types
        },
    ],
    submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Response', ResponseSchema);
