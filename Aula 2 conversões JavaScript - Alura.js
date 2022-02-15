//conversões
// tipo de dado
// boolean

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString) // comparar apenas o valor
//ou 
console.log(numero === numeroString) // comparar o valor e o tipo
// caso eu utilize o sinal de + o resultado será a concatenação dos valores
console.log(numero + numeroString)
//para uma conversão implícita utiliza-se o 'Number' 
console.log(numero + Number(numeroString))