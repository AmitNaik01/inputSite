const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    type: { type: String, required: true }, // 'text', 'grid', 'checkbox'
    question: { type: String, required: true },
    image: { type: String }, // Optional image URL
    options: [String], // For checkbox or grid type
});

const FormSchema = new mongoose.Schema({
    title: { type: String, required: true },
    headerImage: { type: String }, // Optional header image
    questions: [QuestionSchema],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Form', FormSchema);
