const Cliente = {
    nome: "joão",
    Idade:34,
    CPF:"12345678900",
    email:"wolnei@email.com"
}

const chaves = ["nome", "Idade", "CPF","email"]

console.log(Cliente[chaves[0]])
chaves.forEach(inform => console.log(Cliente[inform]))