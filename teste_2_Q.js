let retornaMenorEMaior= [[],[],[]];

let valores = [[200, 100], [300], [100,300]];

function retornaMenorEMaiorValorDeVendas(tickets) { 
   
  for (i=0; i<tickets.length; i++){
    for(j=0; j<tickets[j].length-1; j++){ 
      if (tickets[i][j]> 20 && tickets[i][j]< 500){
        if (tickets[i].length == 1){
        tickets[i].push(0);
        }
        (tickets[i]).sort((a,b) => a-b);
        retornaMenorEMaior[i][j]=tickets[i][j];
        tickets[i].reverse();
        retornaMenorEMaior[i][1]=tickets[i][j];
      }
    }
  }
  return console.log(`valores são ${retornaMenorEMaior}`);
}

retornaMenorEMaiorValorDeVendas(valores);