
require('dotenv').config(); // Ensure this is at the top of your main file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Example route import

const app = express();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors()); // Add this line to enable CORS

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection failed:', err));

// Routes
app.use('/api/auth', authRoutes); // Example route usage

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
