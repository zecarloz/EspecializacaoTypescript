class Carro {
  constructor(public nome: string,
    public peso:number,
      public cor: string,
      public ano: number){
           
   }

}
let carro : Carro;
carro = new Carro("Fusca",880,"Branco",1970);
console.log(`Nome ${carro.nome} Ano ${carro.ano} 
Peso ${carro.peso} kilos Cor ${carro.cor} `);
