const getPlusMinus = (num) => {
  if (typeof num !== 'number') return 'o valor deve ser um número';
  if (num === 0) return 'Neutro';
  if (num < 0) return 'Negativo';
  return 'Positivo';
};

module.exports = getPlusMinus;
