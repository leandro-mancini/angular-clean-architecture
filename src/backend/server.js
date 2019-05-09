module.exports = () => {
  const data = {
    usuarios: []
  }

  // Generate Funcionarios
  for (let i = 1; i < 21; i++) {
    const item = {
      id: i,
      username: 'usuario' + i,
      senha: '123',
      token: '1234567890'
    };

    data.usuarios.push(item);
  }

  return data;
}
