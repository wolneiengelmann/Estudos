Algoritmo "verifica-idade-Wolnei"
Var
idade:   inteiro
menor:   vetor[1..60] de inteiro
adulto:  vetor[1..60] de inteiro
idoso:   vetor[1..60] de inteiro
i, indexMenor, indexAdulto, indexIdoso: inteiro
ehAdulto:logico

Inicio
      indexMenor <- 1
      indexAdulto <- 1
      indexIdoso <- 1
      ehAdulto <- falso

    para i de 1 ate 60 faca
 	    escreva("Entre com a idade da ", i,"ª pessoa: ")
 	    leia (idade)

 	    se idade > 18 entao
       	   se idade < 60 entao
                   ehAdulto <- verdadeiro
            fimse
       fimse

    	 se idade < 19 entao
          escreva("idade: ")
          escreval(idade)
          menor[indexMenor] <- idade
          indexMenor <- indexMenor + 1
       senao
          se ehAdulto = verdadeiro entao
             ehAdulto <- falso
             adulto[indexAdulto] <- idade
             indexAdulto <- indexAdulto + 1
          senao
             idoso[indexIdoso] <- idade
             indexIdoso <- indexIdoso + 1
          fimse
       fimse
    fimpara

    escreval("")//linha em branco

    para i de 1 ate indexMenor faca
         se menor[i] > 0 entao
            escreval("Inserção para menor na posição ",i," é ", menor[i])
         fimse
    fimpara
    para i de 1 ate indexAdulto faca
         se adulto[i] > 0 entao
            escreval("Inserção para adulto na posição ",i," é ", adulto[i])
         fimse
    fimpara
     para i de 1 ate indexIdoso faca
         se idoso[i] > 0 entao
            escreval("Inserção para idoso na posição ",i," é ", idoso[i])
         fimse
    fimpara

Fimalgoritmo