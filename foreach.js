"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notas = [87, 48, 90, 94, 61, 82, 80, 70, 100, 90];
let media = 0;
/*
for (let pos = 0; pos < notas.length; pos++) {
    media += notas[pos]
}
*/
notas.forEach(nota => {
    media += nota;
});
console.log(`Média = ${media / notas.length}`);
//# sourceMappingURL=foreach.js.map