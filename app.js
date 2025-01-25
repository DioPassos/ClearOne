alert ('Bem vindo ao Jog do número secreto')
let numeroSecreto=20;
console.log(numeroSecreto)
let chute = prompt('escolha um numero entre 1 e 30')

if (chute==numeroSecreto){
    alert(`você acertou o número secreto ${numeroSecreto}`)

} else{
    alert("tente novemente,chute foi errado")
}
