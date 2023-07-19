// Crie um middleware de validação para a chave description que possui as chaves createdAt, rating e difficulty

const validateDescription = (req, res, next) => {
  const { description } = req.body;

  if (!description) return res.status(400).json({ message: 'O campo description é obrigatório' });
  
  if (!description.rating) return res.status(400).json({ message: 'O campo rating é obrigatório' });
  
 if (!description.difficulty) {
    return res.status(400).json({ message: 'O campo difficulty é obrigatório' });
  }

  if (!description.createdAt) {
    return res.status(400).json({ message: 'O campo createdAt é obrigatório' });
  }

  next();
};

module.exports = validateDescription;