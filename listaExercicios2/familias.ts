const prompt = require('prompt-sync')();


let numFilhos = 0
let mediaRenda = 0
let mediaFilhos = 0

//leitura 1 vez fora da repetição
let renda = +prompt('Renda familiar: ')
while(renda > 0){
    numFilhos = +prompt('Quantidade filhos: ')
    //Fazer as contagens que o programa tá pedindo
    mediaRenda += renda
    mediaFilhos += numFilhos
    renda = +prompt('Renda Familiar: ')
}
//Exibir o resultado (as médias)