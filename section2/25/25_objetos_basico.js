//* Constante

const array = [1, 2, 3];
array.push(4);
array[0] = 'Marcelo';

//array = 'Marcondes'; //! Não é possível reatribuir um valor a costante, somente editar os elementos caso seja declarada como array

console.log(array);


//* Objeto

const pessoa1 = {
  nome: 'Marcelo',
  sobrenome: 'Marcondes',
  idade: 41
};

console.log(pessoa1);

console.log(pessoa1.nome);


//* Função que cria um objeto

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  };
}

const pessoa2 = criaPessoa('Caio', 'Soares', 15);

const pessoa3 = criaPessoa('Ana', 'Clara', 11);

const pessoa4 = criaPessoa('Aline', 'Soares', 35);

console.log(pessoa2.nome, pessoa3.nome, pessoa4.nome);


//* Objeto com método

const pessoa5 = {
  nome: 'Sandra',
  sobrenome: 'Maria',
  idade: 63,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando oi...minha idade é ${this.idade}`);
  },
  incrementaIdade() {
    this.idade++;
  }
};

pessoa5.fala();

pessoa5.incrementaIdade();
pessoa5.fala();

pessoa5.incrementaIdade();
pessoa5.fala();

pessoa5.incrementaIdade();
pessoa5.fala();