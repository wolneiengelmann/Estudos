const clientes = [
    {
        nome: "Andre",
        cpf: "12121212121",
        dependentes: [
            {
            nome: "Sara",
            parentesco: "filha",
            dataNascimento: "20/03/2011" 
            },
            {
            nome: "Sabrina",
            parentesco: "filha",
            dataNascimento: "04/01/2014"
            }
        ],
    },
    {
        nome: "Juliana",
        cpf: "56756756756",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNascimento: "30/08/2020"
            }
        ]
    }
]
//const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

// let listaDependentes = "";

// for (i = 0; i < clientes.length; i++) {
//     listaDependentes = [...clientes[i].dependentes, ...clientes[++i].dependentes];
// }

console.log(listaDependentes);
console.table(listaDependentes);