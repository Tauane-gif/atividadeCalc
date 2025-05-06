//Crie uma calculadora que utilize as 4 operações básicas e tenha a opção de sair da calculadora.//
var teclado = require('prompt-sync')();
var continuar = true;
while (continuar) {
    var operacoes = teclado('Qual operação você quer calcular (-,+,/,*) ou digite "sair" para encerar: ');
}
console.log('===== CALCULADORA =====');
console.log('      OPERAÇÕES        ');
console.log('      SUBTRAÇÃO (-)       ');
console.log('       ADIÇÃO   (+)       ');
console.log('       DIVISAO  (/)       ');
console.log('     MULTIPLICAÇÃO (*)     ');
console.log(' =====  SAIR (s)  =====    ');
var opcaoDigitada = teclado("Digite uma op\u00E7\u00E3o: ");
if (opcaoDigitada == 's' || opcaoDigitada == 'S') {
    continuar = false;
    console.log("CALCULADORA ENCERRADA");
}
else if (opcaoDigitada == '-') {
    var num1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    var num2 = parseInt(teclado("Digite o segundo n\u00FAmero:  "));
    var subtracao = num1 - num2;
    console.log("O resultao \u00E9 ".concat(subtracao));
}
else if (opcaoDigitada == "+") {
    var num1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    var num2 = parseInt(teclado(" Digite o segundo n\u00FAmero: "));
    var adicao = num1 + num2;
    console.log("O resultado \u00E9 ".concat(adicao));
}
else if (opcaoDigitada == '/') {
    var num1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    var num2 = parseInt(teclado("Digite o segundo n\u00FAmero:"));
    var divisao = num1 / num2;
    console.log("'O resultado \u00E9 ".concat(divisao, " e o segundo n\u00FAmero:"));
}
else if (opcaoDigitada == '*') {
    var num1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    var num2 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    var multiplicacao = num1 * num2;
    console.log(" O resultado \u00E9 ".concat(multiplicacao, " "));
}
else {
    console.log("OPERA\u00C7\u00C3O INV\u00C1LIDA! TENTENNOVAMENTE");
}
