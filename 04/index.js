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

x = 0;

for (let i of usuarios){
      let maior_idade = i.idade > 17 ? true : false;
      let dados ={
        ...usuarios[x],
        maior_idade: maior_idade
      }
      x++;
      console.log(dados);
    }



    
    
