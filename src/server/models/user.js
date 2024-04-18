const connection = require('../config/db');
const bcryptjs = require('bcryptjs');

const User = {
    create: async (username, password) => {
        const hashedPassword = await bcryptjs.hash(password, 10);
        const [rows] = await connection.execute(
            'INSERT INTO users (userName, password) VALUES (?, ?)',
            [username, hashedPassword]
        );
        return rows.insertId;
    },
    findByUsername: async (username) => {
        const [rows] = await connection.execute(
            'SELECT * FROM users WHERE userName = ?',
            [username]
        );
        return rows[0];
    },
};

module.exports = User;