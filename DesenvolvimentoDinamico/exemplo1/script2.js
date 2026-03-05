let rlSync = required('readline-sync');
let nome = rlSync.question("Qual o seu nome? ");

console.log(`Olá, ${nome}`);
