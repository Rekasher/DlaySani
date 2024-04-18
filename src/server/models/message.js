const connection = require('../config/db');

const Message = {
    create: async (userId, content) => {
        const [rows] = await connection.execute(
            'INSERT INTO messages (userId, content) VALUES (?, ?)',
            [userId, content]
        );
        return rows.insertId;
    },
    getAll: async () => {
        const [rows] = await connection.execute(
            'SELECT messages.*, users.userName FROM messages JOIN users ON messages.userId = users.id'
        );
        return rows;
    },
};

module.exports = Message;