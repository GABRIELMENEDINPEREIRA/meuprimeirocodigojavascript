console.log(`trabalhando com condicionais`);
const listaDeDistinos = new Array(
    `salvador`,
    `São Paulo`,
    `rio De Janeiro`,
);
const idadeComprador = 19;
const estaAcompanhada = false;
const temPasagemComprada = true

console.log("Destinos possíveis:");
console.log(listaDeDistinos);


//if (idadeComprador >= 18) {
    //   console.log("Comprador maior de idadade");
    //   listaDeDestinos.splice(1, 1); // removendo item
    //}   else if (estaAcompanhada == true) {
    //    console.log("Comprador está acompanhado");
    //    listaDeDestinos.splice(1, 1); //removedo item
    //}else {
    //   console.log("Não é maior de idade e não posso vender");
// }


if ( idadeComprador >= 18 || estaAcompanhada == true 
 ) {
    console.log("Boa Viagem!!");
    listaDeDistinos.splice(2, 1); // removendo item  
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPasagemComprada) {
    console.log("Boa Viagem");
} else {
  console.log("Você não pode embarcar");
}

console.log(listaDeDistinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);

