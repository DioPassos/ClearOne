alert ('Bem vindo ao Jog do número secreto')
let numeroSecreto=10;
console.log(numeroSecreto);
let chute ;
let tentativas = 1;


while(chute != numeroSecreto){
    chute = prompt('escolha um numero entre 1 e 30')
    if (chute==numeroSecreto){
         alert(`você acertou o número secreto é ${numeroSecreto} fazendo ${tentativas}`);
        
    } else {
        if (chute> numeroSecreto){
            alert(`tente novamente,o numero secreto é menor que o ${chute}`);
        }else {
            alert(`o numero secreto é maior que ${chute}`);
        
            
        }
        tentativas ++;
    }
}
