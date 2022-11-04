let postosDeGasolina = [2, 15, 22, 10.2];
let consumo = 8;
let combustivel = 2;
let totalKm;
let ultimoPosto;

function ultimaParada(combustivel,consumo,postosDeGasolina) {
    postosDeGasolina.sort((a,b) => a-b);
    postosDeGasolina.reverse();
    totalKm = combustivel*consumo;
    for (let i=0; i<postosDeGasolina.length;i++){
        if (postosDeGasolina[i]<=totalKm){
            return postosDeGasolina[i];
        } 
    }
    return -1;
}