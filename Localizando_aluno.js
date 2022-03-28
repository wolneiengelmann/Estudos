const alunos = [`João`, `Juliana`, `Caio`, `Ana`]
const mediasDosAlunos = [10, 7, 9, 6]

//                  indice   0       1
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

//includes o resultado é sempre um Booleano
//indexOf traz o resultado do array ou posição do indice

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos [0].indexOf(nomeDoAluno) //buscou por ana e trouxe o nº
                                                                  //indice "indexOf" da posição 
                                                                  //de Ana q é '3'.

        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + 
        listaDeNotasEAlunos[1][indice] //o mesmo ocorreu aqui
            //indice 1 (mediasDosAluno), no indice '3' que foi carregado antes para a variável indice
    } else {
        return "Aluno não está cadastrado."
    }
}

console.log (exibeNomeNota("Ana"))