const Message = require('../models/message');

const messageController = {
    create: async (req, res) => {
        const { userId, content } = req.body;
        // ...
        const messageId = await Message.create(userId, content);
        const message = { id: messageId, userId, content };
        res.json({ message });
    },
    getAll: async (req, res) => {
        const messages = await Message.getAll();
        res.json({ messages });
    },
};

module.exports = messageController;