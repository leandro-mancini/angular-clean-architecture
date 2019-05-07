module.exports = () => {
  const data = {
    usuarios: []
  }

  // Generate Funcionarios
  for (let i = 0; i < 10; i++) {
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
