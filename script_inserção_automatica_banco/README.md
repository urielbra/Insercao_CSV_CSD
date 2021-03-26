## Script de Inserção de Banco por CSV

Para inserção no banco de dados das informações das planilhas preenchidas pelos aeropalinológicos, deve se seguir o formato exato da planilha Excel abaixo:

https://www.notion.so/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe19f3863-dd93-4e38-82ad-635b3ed5d3cb%2Fmodelo-planilha-insercao.xlsx?table=block&id=65c9225d-ef68-4a6d-9eb2-55cc5a47db47&name=modelo-planilha-insercao.xlsx&userId=b49e438f-8f0c-40fb-b3d5-dc9fd5a4776c&cache=v2

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
