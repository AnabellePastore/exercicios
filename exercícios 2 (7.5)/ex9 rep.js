//9. Faça um programa que receba um número do usuário e mostre
//no console a contagem regressiva até 0.
let numero = parseInt(prompt(" Digite um número para a contagem regressiva até 0: "));

console.log("contagem regressiva está começando em: " + numero)

while( numero >= 0){
    console.log(numero);
    numero --;

}

console.log("Contagem regressiva finalizada!")
