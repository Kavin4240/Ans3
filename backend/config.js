require('dotenv').config(); // Load environment variables from .env file

module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    mongoURI: process.env.MONGO_URI,
    jwtExpire: process.env.JWT_EXPIRE
};
