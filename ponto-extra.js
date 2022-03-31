const notas = [10,9,8,7,6]

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)
//utilizando o map retorna dados atualizado de array
console.log(notasAtualizadas)