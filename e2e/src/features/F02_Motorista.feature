#language: pt

Funcionalidade: Motorista

    Cenário: Novo Motorista
        Dado que eu estou na página 'Home'
        Quando devo clicar no botão 'Novo Motorista'
        E devo visualizar o dialog 'Cadastrar Motorista'
        Quando devo preencher o nome 'Leandro Mancini'
        Quando devo preencher a data de nasc. '06051988'
        Quando devo preencher o telefone '1199999999'
        Quando devo selecionar o tipo de documento 'CPF'
        E devo preencher o número '01234567890'
        Então devo clicar no botão 'Salvar' e grava um novo motorista

    Cenário: Editar Motorista
        Dado que eu estou na página 'Home'
        Quando devo clicar no botão 'Editar' da lista
        E devo visualizar o dialog 'Editar Motorista'
        Quando devo preencher o nome 'Nome editado'
        Quando devo preencher o telefone '1199999999'
        Quando devo selecionar o tipo de documento 'CPF'
        E devo preencher o número '01234567890'
        Então devo clicar no botão 'Salvar' e grava um novo motorista

    Cenário: Inativar Motorista
        Dado que eu estou na página 'Home'
        Então devo ativar ou inativar um item da lista
