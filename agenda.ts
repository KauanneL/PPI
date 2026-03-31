const contatos = [
    'Álvaro', 'Gabriela', 'Erika', 
    'Leticia', 'Andrea', 'Ágata', 'Mariane', 
    'Helloysa', 'Jonatas', 'Dara', 'Rafael'
]

// 3 - Imprimir a lista de contatos
let pos = 0
while (pos < contatos.length){
    console.log(contatos[pos])
    pos++
}
//4 - Retirar um contato de uma posição da lista (pode usar método splice)

//5 - Buscar por um contato (sem usar métodos de JS)
//dado o nome da pessoa. Verdadeiro (está) e falso (não está)
const buscado = 'Mariane'
let encontrado = false //Foi encontrado?
let posicao = 0
while (posicao < contatos.length && !encontrado){
if (buscado === contatos[posicao]){
    encontrado = true
}
posicao++
}
console.log(encontrado)