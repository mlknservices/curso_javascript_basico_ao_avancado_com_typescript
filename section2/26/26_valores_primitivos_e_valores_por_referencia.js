//? Tipos de dados - Primitivos (imutáveis): string, number, boolean, indefined, null (bigint, symbol) - valor

let nome = "Marcelo";

nome[0] = "D"; //* Por ser um dadod imutável este comando não efetua nenhuma alteração na string

console.log(nome[0], nome);

let a = "A";

let b = a; //* Realizado uma cópia do valor de "a"

console.log(a, b);

a = "Outra coisa";

console.log(a, b);

//? Tipos de dados - passados por referência (mutáveis) - array, object, function

let c = [1, 2, 3];

let d = c; //* Neste caso "d" referencia o mesmo local de "c" na memória

console.log(c, d); //* Neste caso, as variáveis "c" e "d" apontam para o mesmo local na memória, então caso o valor de "c" seja alterado, o valor de "d" também será alterado

c.push(4);

console.log(c, d);

d.pop(); //* mesma situação acima onde as variáveis apontam para o memso local na memória

console.log(c, d);

d = [...c]; //* Neste caso está sendo realizado um spread (cópia) do valor da variável "a" para a variável "b"

c.push(4);

console.log(c, d);

const e = {
  nome: "Marcelo",
  sobrenome: "Marcondes",
};

const f = e;

console.log(e, f);

e.nome = "Caio";

console.log(e, f);

const g = {
  nome: "Aline",
  sobrenome: "Soares",
};

const h = { ...g }; //* Neste caso está sendo realizado um spread (cópia) do valor da variável "a" para a variável "b"

console.log(g, h);

g.nome = "Ana";

console.log(g, h);
