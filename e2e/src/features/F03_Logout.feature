#language: pt

Funcionalidade: Deslogar usuario

    Cenário: Logout
        Dado que eu estou na página 'Home'
        Quando devo clicar no botão perfil
        E devo clicar no botão logout 'SAIR'
        Então sou redirecionado para a página 'Login'
