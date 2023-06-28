
/*LISTA*/

/*const frutas=["mamao", "laranja", "melancia", "abacate", "uva", "pera"]

console.log(frutas[3])
frutas.push("maça")
console.log(frutas.length)*/


/*const frutas=["abacaxi" , "mamão" , 10, 15, true, false, 1.5]

frutas.push("Abacate", "laranja")

/*console.log(frutas[0][5]);*/
/*console.log(frutas.length)
*/

















/* string = "" (< nao esquecer)*/

/*const pessoa={
    nome:"Maria",
    sobrenome: """Oliveira",
    idade: 25
}

console.log(pessoa.nome);*/



















/*OBJETOS*/

/*const carro={
    marca: "Nissan",
    modelo:"Kicks",
    ano: 2023
}

const carro1={
    marca:"Jeep",
    Modelo: "Renegade",
    Ano:2022
}

const carro2={
    marca:"volkswagem",
    modelo:"gol",
    ano:2015
}

const carro3={
    marca:"chevrolet",
    modelo:"tracker",
    ano:2020
}

console.log(carro3.ano);
console.log(carro.modelo);
console.log(carro2.marca);
console.log(carro1.modelo);*/

/*para retur obj colocar entre chaves ={}*/

/*function carro(marca, modelo, ano) {
    return {marca, modelo, ano}
}

const carro1=carro("jeep", "renegade", 2020);
console.log(carro1.marca, carro1.modelo, carro1.ano);*/












/*function criaPessoa(idade, altura, nome, sobrenome){
    return {idade, altura, nome, sobrenome}
}

const pessoa=criaPessoa(15, 1.70, "sabrina", "tereza");
const pessoa1=criaPessoa(17, 1.80, "carlos", "santos");
const pessoa2=criaPessoa(28, 1.50, "nicolas", "gabriel");
const pessoa3=criaPessoa(33, 1.65, "maria", "eduarda");


console.log(pessoa1.idade, pessoa.nome, pessoa2.altura, pessoa3.sobrenome);*/









/*function compararParImpar(n){

    if(n % 2 ===0){

      return  `onumero ${n} é PAR`;

    }else{
     
        return `o numero ${n} é IMPAR`

    }
}
console.log(compararParImpar(67678424637));*/












function menoremaioridade(idade){
    if ( idade <= 5 ) {
        return " esta pessoa é uma bebê";
    } else if ( idade >=6 && idade <=13){
        return "esta pessoa é uma criança";
    } else if (idade >=14 && idade <=17){
        return "esta pessoa é um adolecente";
    }else if  (idade >=18 && idade <=60){
        return "esta pessoa é um adulto";
    }else if (idade >=61 && idade <=80){
        return "esta pessoa é um idoso"
    }else {
        return "essa pessoa é um ancião";
    }
    
}

console.log(menoremaioridade(50))