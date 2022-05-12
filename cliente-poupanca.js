function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf=cpf
    this.email=email
    this.saldo=saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const andre = new Cliente("Andre","55588844477",
"andre@email.com",100)

function ClientePoupanca(nome,cpf,email,saldo,
saldoPoup)
{
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const Ju = new ClientePoupanca("Ju", "55588844411",
"ju@email.com",100,200)

console.log(Ju)

ClientePoupanca.prototype.depositarPoup = function
(valor){
    this.saldoPoup +=valor
}

Ju.depositarPoup(30)
console.log(Ju.saldoPoup)
console.log(andre.saldoPoup)