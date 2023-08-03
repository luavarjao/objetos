const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

let jovens = [];
let adultos = [];

for (let i of usuarios){
    if(i.idade < 18){
        jovens.unshift(i);
    } else {
        adultos.unshift(i);
    }
}

console.log(`Os jovens são:`)
console.log(jovens);
console.log(`Os adultos são:`);
console.log(adultos);
