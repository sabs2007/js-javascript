function imposto(salario) {

    let aliquota;

    if(salario >=0 && salario <= 1100 ){
        return aliquota = 0.05;
    }else if(salario >= 1100 && salario <= 2500 ){
        return aliquota = 0.1
    }else{
        return aliquota = 0.15
    }
    
}

//console.log(imposto(2220))

const valorSalario= 2000;
const valorBeneficios= 250;


const valorImposto= imposto(valorSalario)* valorSalario;
console.log(valorImposto)

let valorB= valorImposto-valorImposto+valorBeneficios

console.log(valorB)

