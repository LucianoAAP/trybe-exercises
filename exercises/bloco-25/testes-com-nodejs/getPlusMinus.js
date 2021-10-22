const getPlusMinus = (num) => {
  if (num === 0) return 'Neutro';
  if (num < 0) return 'Negativo';
  return 'Positivo';
};

module.exports = getPlusMinus;
