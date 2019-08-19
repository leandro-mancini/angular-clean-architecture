#language: pt

Funcionalidade: Autenticar usuario

    Cenário: Login
        Dado que estou na página inicial 'Login'
        Quando devo preencher o usuario 'test'
        Quando devo preencher a senha '123'
        E devo clicar no botão 'Entrar'
        Então sou redirecionado para a página 'Home'
