let postosDeGasolina = [22, 215, 222, 210.2];
let consumo = 8;
let combustivel = 2;
let totalKm;
let ultimoPosto;

function ultimaParada(combustivel,consumo,postosDeGasolina) {
    console.log(postosDeGasolina);
    
    postosDeGasolina.sort((a,b) => a-b);
    postosDeGasolina.reverse();
    totalKm = combustivel*consumo;
    console.log(totalKm);
    console.log(postosDeGasolina);
    for (let i=0; i<postosDeGasolina.length;i++){
        if (postosDeGasolina[i]<=totalKm){
            console.log(postosDeGasolina[i]);
            return postosDeGasolina[i];
            //ultimoPosto=postosDeGasolina[i];
            
        } 
        
    }
    console.log(-1);
    return -1;
}
    

ultimaParada(combustivel, consumo,postosDeGasolina);