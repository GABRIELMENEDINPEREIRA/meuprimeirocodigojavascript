console.log(`trabalhando com Listas`);
// const salvador =`salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `rio De Janeiro`;

const listaDeDistinos = new Array(
    `salvador`,
    `São Paulo`,
    `rio De Janeiro`,
);

listaDeDistinos.push(`curitiba`) // adicionando um item na lista
console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDistinos);

listaDeDistinos.splice(1,1);
console.log(listaDeDistinos);


console.log(listaDeDistinos[1], listaDeDistinos[0]);

