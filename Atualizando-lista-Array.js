//Lembrando que o indice começa no zero, logo o aluno João está 
//no indice zero.         0         1       2       3           4
const listaDeChamada = [`João`, ` Ana`, ` Caio`, ` Lara`, ` Marjorie`]
//o comando splice retira um e pode atualizar
//  o primeiro num especifica posição do array, que neste caso seria "Ana".
// o segundo num, se refere a quantidade q será removida, q neste caso será ANA e
// caio e será add `Rodrigo`.

//listaDeChamada.splice(1,2,` Rodrigo`)


//o primeiro num especifica a posição do array, que neste caso seria "caio".
//o segundo num, se refere a quantidade q será removida, q neste caso como está o num 0
// não será removido nada e será add `Rodrigo`.
listaDeChamada.splice(2,0,` Rodrigo`)

console.log(`Lista de Chamada: ${listaDeChamada}.`)