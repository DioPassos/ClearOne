alert ('Bem vindo ao Jog do número secreto')
let numeroSecreto=10;
console.log(numeroSecreto)
let chute = prompt('escolha um numero entre 1 e 30')

if (chute==numeroSecreto){
    alert(`você acertou o número secreto ${numeroSecreto}`)

} else{
    if (chute>numeroSecreto){
        alert(`tente novamente,seu chute foi maior que ${numeroSecreto}`)
    }else{
        alert(`o numero secreto é maior que ${chute}`)

    
    }

}
    

