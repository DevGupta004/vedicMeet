const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const courseRoutes = require('./routes/courseRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/courses', courseRoutes);

const mongoUri = process.env.MONGO_URI || 'mongodb+srv://Dev:LdIsYJvaPchMNcbX@cluster0.hswlgym.mongodb.net/?retryWrites=true&w=majority'; // replace with your MongoDB connection string

// Connect to MongoDB
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err.message);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
