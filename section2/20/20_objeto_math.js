let num1 = 9.45345;

let num2 = Math.floor(num1); // * Arredonda para o número inteiro próximo mais baixo, ignorando as casas decimais

console.log(num2);

let num3 = Math.ceil(num1); // * Arredonda para o número inteiro próximo mais alto, ignorando as casas decimais

console.log(num3);

let num4 = Math.round(num1); // * Arredonda para o número inteiro mais próximo, considerando os valores das casas decimais caso haja

console.log(num4);


console.log(Math.max(1, 4, 6, 7, 43434, 6668, 86, 4, 243, 24, 3254, 5, -2343, 655, 3434, 3557, 75, 323, -24)); // * Exibe o maior número dentre os informados no parâmetro

console.log(Math.min(1, 4, 6, 7, 43434, 6668, 86, 4, 243, 24, 3254, 5, -2343, 655, 3434, 3557, 75, 323, -24)); // * Exibe o menor número dentre os informados no parâmetro

console.log(Math.random()); // * Gera um núermo aleatório entre 0 e 1

console.log(Math.random() * (10 - 5) + 5); // * Gera um número aleatório entre 5 e 10

console.log(Math.round(Math.random() * (10) + 0)); // * Gera um número inteiro aleatório entre 0 e 10

console.log(Math.PI); // * Exibe o valor de PI

console.log(Math.pow(2, 10)); // * Efetua a potenciação entre o primeiro e o segundo parâmetro

console.log(2 ** 10); //! Efetua a potenciação entre o primeiro e o segundo parâmetro, modo mais prático

console.log(9 ** 0.5); // * Exibe a raiz quadrada do número informado