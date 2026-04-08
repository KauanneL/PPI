const prompt = require('prompt-sync')();
//require -> importa uma biblioteca

let numFilhos = 0;
let somaRenda = 0;
let somaFilhos = 0;
let totalFamilias = 0;

let renda = +prompt('Renda familiar: ');

while (renda >= 0) {
    numFilhos = +prompt('Quantidade de filhos: ');

    somaRenda += renda;
    somaFilhos += numFilhos;
    totalFamilias++;

    renda = +prompt('Renda familiar: ');
}

if (totalFamilias > 0) {
    let mediaRenda = somaRenda / totalFamilias;
    let mediaFilhos = somaFilhos / totalFamilias;

    console.log('Média da renda:', mediaRenda);
    console.log('Média de filhos:', mediaFilhos);
} else {
    console.log('Nenhum dado foi informado.');
}