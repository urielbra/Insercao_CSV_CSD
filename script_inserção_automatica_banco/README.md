## Script de Inserção de Banco por CSV

Para inserção no banco de dados das informações das planilhas preenchidas pelos aeropalinológicos, deve se seguir o formato exato da planilha Excel abaixo:
https://www.notion.so/Banco-de-dados-072f1720837f490f83766a64978cc1b7#6fd7dc5979be4b8690c9451ddffd6159

As primeiras colunas são para informações gerais sobre a varredura (A a H). As demais colunas, seguem o formato da planilha enviada pela professora Estefanía (primeira imagem da documentação).

Com essa planilha preenchida, deve-se **exportá-la no formato CSV** para utilizar no algoritmo.

### Features

-  Código em NodeJS + ECMAScript
- Utiliza npm, expressJS e Sequelize ORM
- Utiliza Banco de Dados PostgresSQL
- Concebido a partir do padrão MVC
- Uuid (biblioteca para gerar uuid).





#### Para Instalar

###### Tendo o Postgres, Node e npm configurado e instalado na máquina, basta rodar os comandos

`$ npm install`

Coloque dentro da pasta raiz `./script_inserção_automatica_banco` o arquivo CSV. Esse deve ter o nome exatamente igual a `**input.csv**`;

#### Para Executar
`$ npm start`

Feito isso, **os dados da planilha serão inseridos no banco.**

##### Autor: Uriel B.Braga
