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

let relatorio=" ";

for (let info in cliente){
    if (typeof cliente[info] === "object" || typeof cliente[info]==="function"){
        continue
    }else{
        relatorio+= `
        ${info} ==> ${cliente[info]}
        `
    }
}
console.log(relatorio)
console.log(cliente.saldo)
cliente.depositar(20)
console.log(cliente.saldo)