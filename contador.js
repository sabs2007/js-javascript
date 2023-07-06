let botao = document.getElementById("botao");
let botao1 = document.getElementById("botao1");
let numero = 0;

botao.addEventListener("click", function contador(){
    let count = document.getElementById("count");
    numero++

    count.innerHTML = numero;

});
botao1.addEventListener("click", function contador(){
    let count = document.getElementById("count");
    numero--

    count.innerHTML = numero;

});
