// function imprimeNomeEmail(tipoCliente){
//     console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
//    }
   
//    const cliente1 = {
//     nome: "Carlos",
//     email: "c@email.com"
//    }
   
//    const cliente2 = {
//     nome: "Fred",
//     email: "f@email.com"
//    }
//    imprimeNomeEmail.call(cliente1, "Cliente Especial")

//utlizando o Apply


   function imprimeNomeEmail(tipoCliente, agencia){
    console.log(`${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}`)
   }
   
   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
   }
   const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
   const clienteEstudante = ["cliente estudante", "Fortaleza"]

    imprimeNomeEmail.apply(cliente1, clienteEspecial)
    // cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

    imprimeNomeEmail.apply(cliente2, clienteEstudante)
    // cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com
    //Utilize o método apply() caso você tenha um array de dados e o call() para 
    //passar valores individuais como parâmetro. Lembre-se que o array deve seguir
    // a ordem correta dos parâmetros informado na função.