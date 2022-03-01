//Lembrando que o indice começa no zero, logo o aluno João está 
//no indice zero.         0         1       2       3           4
const listaDeChamada = [`João`, ` Ana`, ` Caio`, ` Lara`, ` Marjorie`]
//o comando splice retira um e pode atualizar

listaDeChamada.splice(1,2,` Rodrigo`)

//listaDeChamada.splice(2,0,` Rodrigo`)

console.log(`Lista de Chamada: ${listaDeChamada}.`)