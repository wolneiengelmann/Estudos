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
//para uma conversão implícita utiliza-se o 'Number' ou String que vão nos 
//permitir converter os dados para números ou textos.
console.log(numero + Number(numeroString))
//Podemos usar o operador de soma + para fazer a conversão de textos para números,
//colocando-os antes das variáveis:

//console.log( + largura * + altura); 
//teremos a conversão de String para números realizado usando o + antes das variáveis