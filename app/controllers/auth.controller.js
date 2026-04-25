const authService = require('../services/auth.service');

// Register User
async function register(req, res) {
    try {
        const user = await authService.register(req.body);
        return res.status(201).json({ id: user.id, username: user.username, email: user.email });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

async function login(req, res) {
    try {
        const user = await authService.login(req.body);
        return res.status(200).json({
            token: user.token, 
            id: user.id, 
            username: user.username, 
            email: user.email 
        });
    } catch (err) {
        console.error(err);
        return res.status(401).json({ message: err.message });
    }
}

module.exports = {
    register,
    login
};