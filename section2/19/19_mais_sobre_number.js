let num1 = 10.45443;
let num2 = 2.5;

console.log(num1 + num2); // * Realizado a soma dos valores das variáveis informadas

console.log(num1.toString() + num2); // * Realizado a concatenação das variáveis pois a variável "num1" foi convertida para string e deste modo não é possível realizar a conta

console.log(num1.toString(2)); // * A variável "num1" tera´o seu valor representado no formato binário

console.log(num1.toFixed(2)); // * O valor informado na variável será arredondado para exibição de acordo com a quantidade de casas informadas, neste exemplo "2". O valor nao é alterado, somente sua exibição

console.log(Number.isInteger(num2)); // * Retorna a informação se o valor da variável é um número inteiro

let temp = num1 * 'olá';

console.log(Number.isNaN(temp)); // * Retorna a informação se o valor da variável informada não é um número

let num3 = 0.7;
let num4 = 0.1;

num3 += num4;
num3 += num4;
num3 += num4;

console.log(num3);

num3 = num3.toFixed(2);

console.log(Number.isInteger(num3)); // * Mesmo usando o comando "toFixed" o valor não e um "inteiro" pois o sistma realiza contas binárias, portanto o valore real da variável ainda é 0.9999


// * Realizando o arredondamento para resolver problema de imprecisão do JavaScript

let num5 = 0.7;
let num6 = 0.1;

num5 += num6;
num5 += num6;
num5 += num6;

num5 = parseFloat(num5.toFixed(2)); // * Deste modo o valor da variáel é realmente arredondado

console.log(num5);

console.log(Number.isInteger(num5));


// * Realizando o arredondamento utilizando cálculo para resolver problema de imprecisão do JavaScript

let num7 = 0.7;
let num8 = 0.1;

num7 = ((num7 * 100) + (num8 * 100)) / 100;
num7 = ((num7 * 100) + (num8 * 100)) / 100;
num7 = ((num7 * 100) + (num8 * 100)) / 100;

console.log(num7);

console.log(Number.isInteger(num7));