var readlineSync = require('readline-sync');
let nome = readlineSync.question("Qual o seu nome? ");

console.log(`Olá, ${nome}`);
