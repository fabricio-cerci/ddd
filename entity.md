# Entidade
- Ela é única (possui um identificador)
- Suas outras propriedades podem ir mudando com o tempo
- Caso dois objetos tem o mesmo id, eles são a mesma entidade
- Possui comportamentos
- Possui regras de negócio
- A validação dentro de DDD significa garantir que o estado atual da minha entidade esteja sempre correto
- A expressividade semântica é o que diferencia os métodos de um getter e setter
- A entidade sempre vai ter que representar o estado correto e atual daquele elemento
- Os dados a todo momento devem estar consistentes
- A entidade deve ser algo confiável 100% das vezes na legitimitade de seu estado atual]
- 100% das vezes deve estar consistente

## Entidade anêmica
- Entidades que apenas guardam dados
- Muitas vezes é criada orientada a tabela de banco de dados igual um entidade de ORM
- Entidades que não possuem regras de negócio
- É praticamente um DTO (Data Transfer Object)

## Regras de negócio
- Formas de você mudar o comportamento da sua entidade aplicando validações, formulas, qualquer coisa
que satisfaça o que o sistema está pedindo
- Quando normalmente estamos pensando em motivo de mudança, estamos pensando em regras de negócio

>A modelagem do sistema rico, expressa o negócio

>Quando temos apenas um set e um get eles não significam muito pois só atribuem valor sem nenhum significado, mas quando temos um método específico pensando na mudança daquele campo, estamos criando um domínio rico e estamos    usando uma regra de negócio.

