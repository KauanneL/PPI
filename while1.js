"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1 - Imprimir os números de 1 a 5
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
let numeros = 1; //inicio
while (numeros <= 5) { //2. teste
    console.log(numeros);
    numeros += 1; //3. atualização
}
//2. Calcular a média de 4 notas que estão em um array
//const no caso de array ou objeto: não deixa alterar a referência para o array ou objeto
const notas = [80.0, 54.40, 60.0, 90.54];
let mediaParcial = 0;
let pos = 0; //posição no array - começa de 0
while (pos < notas.length) {
    if (pos === 0 || pos === 1) {
        mediaParcial = mediaParcial + 2 * notas[pos];
    }
    else {
        mediaParcial = mediaParcial + 3 * notas[pos];
    }
    pos++;
}
console.log(mediaParcial / 10);
//# sourceMappingURL=while1.js.map