//Criando a tabela

import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos`.then(() => {
//     console.log('Tabela deletada!')
// }).catch(() => {
//     console.log('ERRO')

// })

// Está função (sql) utiliza uma funcionalidade chamada template literals (``)
sql` 
    CREATE TABLE videos (
        id  TEXT PRIMARY KEY,
        title   TEXT,
        description TEXT,
        duration    INTEGER
);
`.then(() => {
    console.log('Tabela criada!')
}).catch(() => {
    console.log('Deu erro')
})


//Basicamente está parte do código funciona como uma função assíncrona, no qual sql - a função acima - possui os parâmetros para acessar o banco de dados criado pelo neon. Dessa forma imbutimos um código na linguagem sql que quando rodado (podemos utilizar o comando node create-table.js no terminal) cria a tabela com os dados desejados.

//Ressaltando que devemos iterromper o script do comando apos o retorno da criação da tabela 