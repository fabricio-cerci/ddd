# Entidade
- Ela é única (possui um identificador)
- Suas outras propriedades podem ir mudando com o tempo
- Caso dois objetos tem o mesmo id, eles são a mesma entidade
- Possui comportamentos
- Possui regras de negócio

## Entidade anêmica
- Entidades que apenas guardam dados
- Muitas vezes é criada orientada a tabela de banco de dados igual um entidade de ORM
- Entidades que não possuem regras de negócio
- É praticamente um DTO (Data Transfer Object)

## Regras de negócio
- Formas de você mudar o comportamento da sua entidade aplicando validações, formulas, qualquer coisa
que satisfaça o que o sistema está pedindo