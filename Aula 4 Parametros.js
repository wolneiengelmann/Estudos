// parâmentros de função
               //2     //2
function soma (num1, num2){
    return num1 + num2;
}

console.log(soma(2, 2))
console.log(soma(245, 20))
console.log(soma(-500, 60))

// parâmetros X argumentos

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}` ;
}
                    //cuidado para n inverter os parâmetros
console.log(nomeIdade(35, "wolnei"))

function multiplaca (numero1, numero2){
    return numero1 * numero2;
}
// função dentro de outra função
//1º ela usa a função 'soma' e em seguinta, multiplica
console.log(multiplaca(soma(4, 5), soma(3, 3)))