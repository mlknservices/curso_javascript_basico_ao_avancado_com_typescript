function saudacao(nome) {
  console.log(`Bom dia ${nome}!`);
}

saudacao("Marcelo");
saudacao("Aline");
saudacao("Caio");
saudacao("Ana");

function saudacao2(nome) {
  return `Bom dia ${nome}!`;
}

const variavel = saudacao2("Sandra");

console.log(variavel);

function soma(x, y) {
  const resultado = x + y;
  console.log("Primeiro olá mundo!"); // * Comando adicionado antes do return será exibido
  return resultado;
  console.log("Segundo olá mundo"); // * Comando adicionado depois do return não será exibido
}

console.log(soma(2, 2));

function multiplicacao(x = 0, y = 0) {
  //! Definindo o valor no parâmetro"0", caso não seja informado um valor ao declarar a função, ela será considerado como o valor do parâmetro
  const resultado = x * y;
  return resultado;
}

console.log(multiplicacao(2, 0));

console.log(multiplicacao(2, 9));

//? Declarand uma função anônima

const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));

console.log(raiz(16));

//? Declarand uma arrow function

const dobro = (n) => {
  return n * 2;
};

console.log(dobro(3));

console.log(dobro(7));

//! Mesma função que a de cima porém de um modo simplificado, isto só é possível com arrow function e neste caso pela função ter somente uma linha
const dobro2 = (n) => n * 2;

console.log(dobro2(3));

console.log(dobro2(7));
