//Crie uma calculadora que utilize as 4 operações básicas e tenha a opção de sair da calculadora.//

let teclado = require('prompt-sync')();

let continuar: boolean = true;

while (continuar == true) {
    let operacoes: string = teclado('Qual operação você quer calcular (-,+,/,*) ou digite "Sair" para encerar: ');

    console.log(' ===== CALCULADORA =====  ');
    console.log('      OPERAÇÕES           ');
    console.log('      SUBTRAÇÃO (-)       ');
    console.log('       ADIÇÃO   (+)       ');
    console.log('       DIVISAO  (/)       ');
    console.log('     MULTIPLICAÇÃO (*)    ');
    console.log(' =====  SAIR (s)  =====   ');

    let opcaoDigitada = teclado(`Digite uma opção: `)


    if (opcaoDigitada == 's' || opcaoDigitada == 'S') {
        continuar = false;
        console.log(`CALCULADORA ENCERRADA`);
    }

    else if (opcaoDigitada == '-') {
        let num1: number = parseInt(teclado(`Digite o primeiro número: `));
        let num2: number = parseInt(teclado(`Digite o segundo número:  `));
        let subtracao = num1 - num2
        console.log(`O resultao é ${subtracao}`)
    }
    else if (opcaoDigitada == `+`) {
        let num1: number = parseInt(teclado(`Digite o primeiro número: `));
        let num2: number = parseInt(teclado(` Digite o segundo número: `));
        let adicao = num1 + num2;
        console.log(`O resultado é ${adicao}`);
    }
    else if (opcaoDigitada == '/') {
        let num1: number = parseInt(teclado(`Digite o primeiro número: `));
        let num2: number = parseInt(teclado(`Digite o segundo número:`));
        let divisao = num1 / num2;
        console.log(`'O resultado é ${divisao} e o segundo número:`);
    }
    else if (opcaoDigitada == '*') {
        let num1: number = parseInt(teclado(`Digite o primeiro número: `));
        let num2: number = parseInt(teclado(`Digite o primeiro número: `));
        let multiplicacao = num1 * num2;
        console.log(` O resultado é ${multiplicacao} `);
    }
    else {
        console.log(`OPERAÇÃO INVÁLIDA! TENTENNOVAMENTE`);
    }

}
