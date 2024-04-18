const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Нет токена авторизации' });
    }
    try {//вот тут вроде и ошибка
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET); // Извлекаем токен без префикса
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Неверный токен' });
    }
};

module.exports = authMiddleware;