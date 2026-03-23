var nome = 'Kauanne';
var matr = 20231144010050;
var outra = 'Luíza';
console.log(outra);
var pessoa; //qualquer tipo
//undefined: sem valor definido
var bim1; // a barra vai permitir a variãvel ser mais de uma coisa
console.log(bim1);
bim1 = 75;
console.log(bim1);
function acimaMedia(nota) {
    var estaAcima = false;
    if (nota > 60) {
        estaAcima = true;
    }
    return estaAcima;
}
if (acimaMedia(bim1)) {
    var acimaMedia_1 = true;
    console.log("Acima da média!");
}
else {
    console.log("Abaixo da média!");
}
