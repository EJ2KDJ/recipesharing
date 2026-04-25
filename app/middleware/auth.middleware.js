const jwt = require('jsonwebtoken');

const {JWT_KEY} = process.env;

function auth(req, res, next) {
    // Get the token from the Authorization header
    const authHeader = req.headers.authorization;

    // Check if the token is present and starts with "Bearer "
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Invalid token' });

    // Verify the token
    try {
        const decoded = jwt.verify(token, JWT_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = {auth};