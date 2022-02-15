// let x = "";
// console.log(x);
// x = "oi";

// 1ª DECLARAÇÃO DE FUNÇÃO 

// 1) declara a função
                        //string e guarda a soma da função "soma"
function imprimeTexto (texto) {
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto(soma());
imprimeTexto("oi");
imprimeTexto("outro texto");

// três formas de escrever funções

function soma (){
    //pode ter outros cod mas nada após o return
    return 2 + 2;
}
console.log (soma())