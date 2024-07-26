alert('Boas vindas ao jogo do número secreto');

let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); 
console.log(numeroSecreto);
let chute;
let tentativa = 1;

//Enquanto o chute não for igual ao n.s. (!= Significa Diferente)
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    }

    //Se não for igual ao número secreto
    else {
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que o ${chute}`);
        } else {
            alert (`O número secreto é maior que o ${chute}`);
        }

        //tentaiva = tentaiva + 1;
        tentativa++

     }
}

let palavraTentaiva = tentativa > 1 ? 'tentaivas' : 'tentativa';
alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentaiva}.`);



