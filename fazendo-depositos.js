const cliente = {
    nome: "wolnei",
    Idade:34,
    CPF:"12345678900",
    email:"wolnei@email.com",
    fones:["552191235498", "552198873124"],
    dependentes:[
        {
            nome:"Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"},
        {
            nome:"Samia Maria",
            parentesco:"filha",
            dataNasc:"04/01/2014"
        }
    ],
    saldo: 100,

    depositar: function(valor)
    {
        this.saldo+=valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)

    