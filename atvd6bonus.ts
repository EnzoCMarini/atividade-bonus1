console.clear ()

let teclado = require (`prompt-sync`)()

console.log(`+ ======================= +`);
console.log(`+ = Gasolina 5,50/litro = +`);
console.log(`+ == Etanol 4,00/litro == +`);
console.log(`+ ======================= +`);

let gasolinaL: number = 0;
let etanolL: number = 0;
let etanolR: number = 0;
let gasolinaR: number = 0;

console.log(`Responda com Etanol ou Gasolina`)
let pergunta: string = teclado(`qual tipo de alcool você quer? R:`);

if (pergunta == `etanol` || pergunta == `Etanol`){
    etanolL = parseInt(teclado(`Coloque quantos litros de Etanol você quer: `));
    if (etanolL >= 20){
        (etanolR * 0.05);
    }
    etanolR = (4 * etanolL);
    console.log(`O Preço vai ficar ${etanolR}`);

}
else if (pergunta == `gasolina` || pergunta == `Gasolina`){ 
    gasolinaL = parseInt(teclado(`Coloque quantos litros de Gasolina você quer: `));
    if (gasolinaL >= 20){
        gasolinaR = gasolinaL * (5.50 * 0.05);
    }
    gasolinaR = (5.50 * gasolinaL);
    console.log(`O preço vai ficar ${gasolinaR}`);
}
else{
    console.log(`Por favor, responda com "Gasolina" ou "Etanol"`);
};