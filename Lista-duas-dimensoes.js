        //o indice "0" é joão da array "alunos";
const alunos = [`João`, `Juliana`, `Caio`, `Ana`]
             //o indice "0" é 10 da array "mediasDosAlunos";    
const mediasDosAlunos = [10, 7, 9, 6]
//criado mais uma array com outra array interna;
                //o indice "0" é alunos da array "listaDeNotasEAlunos";
                           //o indice "1" é mediasDosAlunos da array "listaDeNotasEAlunos";
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]
//apresentamos o array listaDeNotasEAlunos, o indice 0 que é "alunos", que é um array
//que por sua vez apresenta o valor do indice 0 que tem o valor string "João".
console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`)
//em seguida para apresentar a média do aluno João, chamamos a array listaDeNotasEAlunos, 
//pedimos para apresentar o indice 1, que tem o valor de uma array "mediasDosAlunos", com o 
//indice 0, que possui o valor "10".