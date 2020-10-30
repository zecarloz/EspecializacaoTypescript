class Veiculos {
  constructor(public nome: string,
    public peso:number,
      public cor: string,
      public ano: number){           
   }
}
let veiculo : Veiculos;
veiculo = new Veiculos("Fusca",880,"Branco",1970);
console.log(`Nome ${veiculo.nome} Ano ${veiculo.ano} 
Peso ${veiculo.peso} kilos Cor ${veiculo.cor} `);
