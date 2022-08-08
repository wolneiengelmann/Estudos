const livros = require('./listaLivros');
const menorValor = require('./menorValor');
const troca = require('./troca');

//uso de métodos melhorados para organizar um array
for(let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log('Posição atual', atual);
    console.log('Livro atual', livros[atual]);
    //console.log('Posição atual', atual);
    let livroMenorPreco = livros[menor];
    console.log('Livro menor preço - ', livroMenorPreco);
    //troca(livros, atual);
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual; 
}
console.log(livros);