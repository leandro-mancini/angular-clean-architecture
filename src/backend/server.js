module.exports = () => {
  const data = {
    usuarios: [],
    motoristas: []
  }

  data.usuarios.push({
    id: 1,
    username: 'test',
    password: '123',
    email: 'contato@test.com.br',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c3VhcmlvMSIsInNlbmhhIjoiMTIzIn0.Pu_q8I5wAFYKMoRHx89SALV2zRE9YvfmF6WYthpDLbU'
  });

  data.motoristas = [
    {
      "id": 1,
      "name": "Pouca Tripa",
      "birth_date": "1976-09-22T00:00:00",
      "state": "São Paulo",
      "city": "São Paulo",
      "enable": true,
      "addresses": {
        "name": "Casa",
        "state": "São Paulo",
        "country": "BR",
        "neighborhood": "CENTRO",
        "city": "São Paulo",
        "street_number": 24,
        "complement": "apartamento",
        "postal_code": "01300-000",
        "street_name": "Avenida Paulista"
      },
      "documents": [
        {
          "expires_at": "2010-11-23T00:00:00+00:00",
          "country": "BR",
          "number": "700441702",
          "doc_type": "CNH",
          "category": "AB"
        }
      ]
    },
    {
      "id": 2,
      "name": "Quase nada",
      "birth_date": "1986-09-22T00:00:00",
      "state": "Rio de Janeiro",
      "city": "Niterói",
      "enable": true,
      "addresses": {
        "name": "",
        "state": "",
        "country": "",
        "neighborhood": "",
        "city": "",
        "street_number": "",
        "complement": "",
        "postal_code": "",
        "street_name": ""
      },
      "documents": [
        {
          "country": "BR",
          "number": "12312312377",
          "doc_type": "CPF"
        }
      ]
    }
  ];

  return data;
}
