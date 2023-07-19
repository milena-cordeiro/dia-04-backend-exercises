const express = require('express');
const activitiesList = require('./utils/data');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');

const app = express();

app.use(express.json());

app.get('/activities', (req, res) => {
  res.status(200).json(activitiesList);
});

app.post('/activities', validateName, validatePrice, validateDescription, (req, res) => {
const { name, price, description, rating, difficulty, createdAt } = req.body;

const newActivity = {
  name,
  price,
  description,
  rating,
  difficulty,
  createdAt,
};

activitiesList.push(newActivity);

res.status(201).json({ message: 'Atividade cadastrada com sucesso' });
});

module.exports = app;