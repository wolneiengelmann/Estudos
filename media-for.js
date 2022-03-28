const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0
// For será exec. enquanto o indice de notas for maior q i!
// no início i=0 e o indice de notas é 3.
for (let i = 0; i < notas.length; i++){
// vai somar a var somaDasNotas q é "0" + notas no indice "0"
// ao final vai pegar i(0) + 1 = indice 1 que em notas é (6,5)
    somaDasNotas += notas[i];
}
// soma as todas as notas e divide pelo tamanho da array (length)
let media = somaDasNotas/notas.length

console.log (media)