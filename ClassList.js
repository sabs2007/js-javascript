let jan = document.getElementById("janela");
let botao = document.getElementById("botao");
let botao1 = document.getElementById("botao1");
let botao2 = document.getElementById("botao2");
let botao3 = document.getElementById("botao3");


botao.addEventListener('click', function(){
    let jan = document.getElementById("janela");
     
    jan.classList.toggle("vermelho");
    
})

botao1.addEventListener('click', function(){
   let jan = document.getElementById("janela");
    jan.classList.toggle("violeta")
})

botao2.addEventListener('click', function(){
    let jan = document.getElementById("janela");
     
    jan.classList.toggle("verde-neon");
    
})

botao3.addEventListener('click', function(){
    let jan = document.getElementById("janela");
     
    jan.classList.toggle("verde-escuro");
    
})

/*jan.classList.remove("vermelho");
jan.classList.add("azul");
jan.classList.toggle





    jan.classList.toggle("verde-escuro");

    jan.classList.toggle("verde-neon");

    jan.classList.toggle("violeta")*/