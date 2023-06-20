/*let idade = 70;

if(idade<= 10 ){
    console.log("essa pessoa é uma criança");
}else if(idade>= 17 && idade <=17){
    console.log("Essas pessoa é um adolecente");
}else if(idade >=18 && idade <=60){
    console.log("essa pessoa é adulta");
}else {
    console.log("essa pessoa é idosa");
}**/

/*const nota1 = 4;
const nota2 =3;
const nota3 =3;
const nota4 =3;

media = (nota1 + nota2 + nota3 + nota4) /4;

console.log("A media é", media)

if (media <=3.99) {
    console.log("Aluno reprovado");
}
else if(media >=4 && media <=6.99){
    console.log("Aluno de recuperação");
}
else{
    console.log("Aluno aprovado");}*/

let p=83;
let a=1.80;
let imc = p/(a*a);

console.log("meu imc é" , imc);

if(imc < 18.5){
    console.log("abaixo do peso");
}
else if (imc >=18.5 && imc <25 ) {
    console.log("peso normal");
}
else if ( imc >=25 && imc <30 ) {
    console.log("acima do peso");
}
else if (imc >=30 && imc <40){
    console.log("obeso");
}
else{
    console.log("obesidade grave");
}