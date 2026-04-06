"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require('prompt-sync')();
let renda = +prompt('Renda familiar: ');
let numFilhos = +prompt('Quantidade filhos: ');
while (renda > 0) {
    //faz as contagens que o programa tá pedindo
    renda = +prompt('Renda familiar: ');
    numFilhos = +prompt('Quantidade filhos: ');
}
//# sourceMappingURL=familias.js.map