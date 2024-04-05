const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    price: { type: String, required: true },
    courseDuration: { type: Number, required: true },
    totalEnrolled: { type: Number, required: true },
    contact: {
        phone1: { type: String, required: true },
        phone2: { type: String, required: true }
    }
});

module.exports = mongoose.model('Course', courseSchema);
