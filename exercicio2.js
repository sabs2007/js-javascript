//let pagamento="debito";

//if(pagamento === "debito"){
 //   console.log("recebe 10% de desconto");
//}
//else if(pagamento === "dinheiro" || pagamento === "pix"){
   // console.log("15% de desconto");
//}
// if(pagamento === "2x"){
//    console.log("preço normal de etiqueta sem juros");
//}
//else {
 //   console.log("preço normal de etiqueta mais juros de 10%");//
//}

let pagameto="debito"


switch (pagamento) {
    case "debito":
        
    console.log("recebe 10% de desconto")

        break;
        case "dinheiro":
        
    console.log("recebe 15% de desconto")
        
        break;
        case "dinheiro":
        
    console.log("recebe 15% de desconto")

    break;
    case "pix":
    
    console.log("recebe 15% de desconto")

    break;
    case "2x":
    
console.log("preço normal de etiqueta sem juros ")

    default:
        console.log("preço normal de etiqueta mais 10% de juros")
        break;
}