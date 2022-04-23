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
function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)