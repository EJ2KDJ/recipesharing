const {User} = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {JWT_KEY} = process.env;

const SALT_ROUNDS = 10;

async function registerUser(user, password) {
    
    // Does user already exist?
    const existingUser = await User.findOne({where: {email}});

    if (existingUser) throw new Error('User already exists');

    //Hash password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    return user;
}

async function loginUser(email, password) {
    const user = await User.findOne({where: {email}});

    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new Error('Invalid password');

    const token = jwt.sign(
        {id: user.id}, 
        JWT_KEY, 
        {expiresIn: '1h'}
    );

    return {user, token};
}

module.exports = {
    registerUser,
    loginUser
}