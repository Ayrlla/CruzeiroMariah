console.log("Ano novo está chegando!!");


let nomeMariahCarey = "Mariah Carey";

let idadeMariahCarey = 52; 

let anoAtual = new Date().getFullYear();
let anoNascimentoMariahCarey = anoAtual - idadeMariahCarey;
console.log("Ano de nascimento da Mariah Carey:", anoNascimentoMariahCarey);

let quartaFeira = true; 
console.log("Valor da variável quartaFeira:", quartaFeira);


console.log("Tipo de dado da variável quartaFeira:", typeof quartaFeira);


if (idadeMariahCarey >= 18) {
  console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.");
} else {
  console.log("Sinto muito, mas assistirá da TV Globo.");
}


let mesAniversario = "Agosto"; 
if (mesAniversario === "Agosto" || mesAniversario === "Dezembro" || mesAniversario === "Junho") {
  console.log(`Uma ou mais opções estão corretas. O mês escolhido foi ${mesAniversario}.`);
} else {
  console.log("Algo de errado não está certo. O mês digitado foi " + mesAniversario + ".");
}
