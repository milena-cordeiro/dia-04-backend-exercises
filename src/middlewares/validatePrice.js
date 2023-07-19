// Crie um middleware de validação para a chave price

const validatePrice = (req, res, next) => {
  const { price } = req.body;

  if (!price) {
    res.status(400).json({ message: 'O campo price é obrigatório' });
  }

  if (price < 0 || typeof price !== 'number') {
    res.status(400).json({ message: 'O campo price deve ser um número maior ou igual a zero' });
  }

  next();
};

module.exports = validatePrice;