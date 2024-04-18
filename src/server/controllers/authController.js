const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const authController = {
    register: async (req, res) => {
        const { username, password, confirmation_password } = req.body.user;
        // Валидация данных и проверка паролей
        // ...
        const userId = await User.create(username, password);
        const token = jwt.sign({ userId }, process.env.JWT_SECRET);
        res.json({ token, user: { id: userId, username } });
    },
    login: async (req, res) => {
        const { username, password } = req.body.user;
        // ...
        const user = await User.findByUsername(username);
        if (!user || !bcryptjs.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Неправильный логин или пароль' });
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
        res.json({ token, user: { id: user.id, username: user.userName } });
    },
};

module.exports = authController;