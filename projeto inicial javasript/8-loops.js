console.log(`\ntrabalhando com condicionais`);
const listaDeDistinos = new Array(
    `salvador`,
    `São Paulo`,
    `rio De Janeiro`,
);
const idadeComprador = 19;
const estaAcompanhada = false;
let temPasagemComprada = false;
const Destino = "são paulo"

console.log("\nDestinos possíveis:");
console.log(listaDeDistinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; 

let contador = 0;
let destinoExiste = true;
while(contador<3) {
   if(listaDeDistinos[contador] == Destino) {
    destinoExiste = true;
  
}
    contador += 1;
}

console.log("Destino exite: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpe tivemos um erro!");
}

for(let i = 0 ;i < 3; i++) {
    if(listaDeDistinos[i] == Destino) {
     destinoExiste = true;
 }

}