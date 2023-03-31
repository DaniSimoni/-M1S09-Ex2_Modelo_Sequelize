/* Após criar a estrutura inicial, é necessário criar um novo modelo Sequelize chamado Place para representar um local. Para isso, é importante definir corretamente seus campos para que possa ser utilizado adequadamente. Os campos que devem ser definidos são:

id: um número que serve como identificador único para o local.

name: uma string que representa o nome do local.

telefone: uma string que representa o número de telefone do local.

opening hours: uma string que representa o horário de funcionamento do local.

description: uma string que representa a descrição do local.

latitude: um número que representa a latitude do local.

longitude: um número que representa a longitude do local
*/

const express = require('express');
const connection = require('./src/database');
const place = require('./src/modules/places');

const app = express();

app.use(express.json());        



connection.authenticate();
connection.sync()
console.log('API ON') 

app.listen(3000, () => {
    console.log('SERVIDOR ON!')
}); 



