const nome = 'Marcelo';
const sobreNome = 'Marcondes de Oliveira Santos';
const idade = 41;
const peso = 158.6;
const altura = 1.98;
let imc = '';
let anoNascimento = '';

imc = peso / (altura * altura);

anoNascimento = 2020 - idade;

var imcIndice = '';

if (imc > 0 && imc < 18.5) {
  imcIndice = 'você está abaixo do peso ideal';
} else if (imc >= 18.5 && imc < 25) {
  imcIndice = 'você está em seu peso normal';
} else if (imc >= 25 && imc < 30) {
  imcIndice = 'você está acima de seu peso (sobrepeso)';
} else if (imc >= 30 && imc < 35) {
  imcIndice = 'obesidade grau I';
} else if (imc >= 35 && imc < 40) {
  imcIndice = 'obesidade grau II';
} else if (imc <= 0) {
  imcIndice = 'cálculo incorreto, reveja seus dados inseridos';
} else {
  imcIndice = ('obesidade grau III');
}

console.log(nome, sobreNome, 'tem', idade, 'anos, pesa', peso, 'Kg.');
console.log(nome, 'nasceu em', anoNascimento, '.');
console.log(nome, 'tem', altura, 'de altura e seu IMC é', imc, '.');
console.log(nome, ', o cálculo do seu IMC é classificado como "', imcIndice, '".');
console.log();
console.log(nome + ' ' + sobreNome + ' tem ' + idade + ' anos, pesa ' + peso + ' Kg.');
console.log(nome + ' nasceu em ' + anoNascimento + '.');
console.log(nome + ' tem ' + altura + ' de altura e seu IMC é ' + imc + '.');
console.log(nome + ', o cálculo do seu IMC é classificado como "' + imcIndice + '".');
console.log();
console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} Kg.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
console.log(`${nome} tem ${altura} de altura e seu IMC é ${imc}.`);
console.log(`${nome}, o cálculo do seu IMC é classificado como ${imcIndice}.`);