const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors());
// Разрешаем использование body-parser для обработки JSON данных
app.use(bodyParser.json());

// Обрабатываем POST запросы на адрес /submit
app.post("/submit", (req, res) => {
  // Получаем данные из тела запроса
  const { name, email, message } = req.body;

  // Выводим полученные данные в консоль
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Отправляем ответ клиенту
  res.send(`Данные получены успешно, полученные данные:
    Name: ${name}
    Email: ${email}
    Message: ${message}`);
});

// Слушаем указанный порт
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
