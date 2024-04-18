require('dotenv').config(); // Загрузка переменных окружения из .env
const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');

app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use('/messages', messageRoutes);


app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
