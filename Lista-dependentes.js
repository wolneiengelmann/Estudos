const cliente = {
    nome: "wolnei",
    Idade:34,
    CPF:"12345678900",
    email:"wolnei@email.com",
    fones:["552191235498", "552198873124"],
    dependentes:[{
        nome:"Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
})
//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter
(dependente =>dependente.dataNasc==="04/01/2014")

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)