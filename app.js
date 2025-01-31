alert ('Bem vindo ao Jog do número secreto')
let numeroSecreto= parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;


while(chute != numeroSecreto){
    chute = prompt('escolha um numero entre 1 e 100')
    if (chute==numeroSecreto){
         break;
        
    } else {
        if (chute> numeroSecreto){
            alert(`tente novamente,o numero secreto é menor que o ${chute}`);
        }else {
            alert(`o numero secreto é maior que ${chute}`);
        
            
        }
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`você acertou!!!, o número secreto é ${numeroSecreto},vc acertou com ${tentativas} ${palavraTentativa}.); 





    //if (//tentativas >1 ){
    //alert//(`//você acertou!!!, o número secreto é ${numeroSecreto},vc acertou com ${tentativas} tentativas`); 
 //}else{ 
   //alert(`//você acertou!!!, o número secreto é ${numeroSecreto},vc acertou com ${tentativas} tentativa`);
