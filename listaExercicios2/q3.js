"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require('prompt-sync')();
// entrada do intervalo
let inicio = Number(prompt('Início do intervalo: '));
let fim = Number(prompt('Fim do intervalo: '));
let quantidadePrimos = 0;
// percorre o intervalo
for (let num = inicio; num <= fim; num++) {
    let primo = true;
    let divisor = num - 1;
    // mesma lógica da questão 2
    while (primo && divisor > 1) {
        if (num % divisor === 0) {
            primo = false;
        }
        else {
            divisor = divisor - 1;
        }
    }
    // conta se for primo
    if (primo && num > 1) {
        quantidadePrimos++;
    }
}
console.log(`Quantidade de números primos no intervalo: ${quantidadePrimos}`);
//# sourceMappingURL=q3.js.map