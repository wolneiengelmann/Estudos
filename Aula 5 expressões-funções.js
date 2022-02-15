// declaração de função

function minhaFuncao (param) {
    // bloco de código
}

minhaFuncao("param");
//console.log(minhaFuncao)

// expressão de função
//no JavaScript, nós não podemos usar uma const, 
//a não ser que já tenhamos passado por ela, iniciado ela alguma vez.
const soma = function(num1, num2){ return num1 + num2}
console.log(soma(1, 1))

// diferença principal ?

console.log(apresentar())

function apresentar() {
    return "Olá";
}