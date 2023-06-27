let altura = 1.70;
let peso = 83;

let imc2 = peso / (altura * altura);

console.log(imc2);

function imc(p , a) {
    
   let resultado = p / (a * a) ;
   
   if(resultado <= 24.9){
    return"Peso normal"
} else if (resultado >= 25 && resultado <=29.9) {
    return "Sobrepeso"
} else if (resultado >=30 && resultado <=34.9){
    return "Obesidade Grau I"
} else if ( resultado >=35 && resultado <=39.9){
    return "Obesidade Grau II"
} else{
    return"Obesidade Grau III"
}
}

console.log(imc(89,1.80));
console.log(imc(70,1.50));
console.log(imc(90,1,60));