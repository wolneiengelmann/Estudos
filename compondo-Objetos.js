const Cliente = {
    nome: "wolnei",
    Idade:34,
    CPF:"12345678900",
    email:"wolnei@email.com",
    fones:["552191235498", "552198873124"]
}

Cliente.dependente = {
    nome:"Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}
console.log(Cliente)

Cliente.dependente.nome = "Sara Silva"

console.log(Cliente)