// O JavaScript considerada a precedência matématica para realizar os cálculos independente da ordenação dos números
// Para alterar a ordem do cálculo deve se colocar os números entre "parenteses", e deste modo será calculado de acordo com a regra de parenteses

// + Adição e concatenação

const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

const num3 = '5';
const num4 = 10;
console.log(num3 + num4); // neste caso o JavaScript efetuada a concatenação pois o ´num1' é uma string.

// - Subtração

const num5 = 5;
const num6 = 10;
console.log(num5 + num6);

// / Divisção

const num7 = 5;
const num8 = 10;
console.log(num7 / num8);

// * Multiplicaação

const num9 = 5;
const num10 = 10;
console.log(num9 * num10);

// ** Potenciação

const num11 = 5;
const num12 = 10;
console.log(num11 ** num12);

// % Resto da divisão

const num13 = 50;
const num14 = 9;
console.log(num13 % num14);

// Operador Incremento

let contador = 1;
contador++;
contador++;
contador++;
contador++;
contador++;
console.log(contador);

contador = 1;
console.log(contador++); // Neste exenplo primeiro será executado a ação de exibir do console
console.log(contador); // e depois será acrescido o valor.

contador = 1;
console.log(++contador); // Neste exenplo primeiro será acrescido o valor e depois será executado a ação de exibir do console
console.log(contador);

contador = 10;
console.log(contador--); // Neste exenplo primeiro será executado a ação de exibir do console
console.log(contador); // e depois será decrescido o valor.

contador = 10;
console.log(--contador); // Neste exenplo primeiro será decrescido o valor e depois será executado a ação de exibir do console
console.log(contador);

contador = 10;
contador++
console.log(contador); // Como melhores práticas não é indicado realizar ação de incremento/decremento dentro da consulta do console, sendo o modo aqui exibido o mais indicado