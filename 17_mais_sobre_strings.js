// * Barra invertida utilizada como caracter de escape, no exemplo para utilizar aspas duplas mesmo tendo utilizado as mesmas aspas duplas para abertura
let umaString = "Um \"texto\"";

console.log(umaString);

// * Para ter uma barra invertida no texto é necessário colocar duas barras "\\" pois a primeira será como escape para exibição da segunda
let outraString = "Um \\texto";

console.log(outraString);

// * Para exibir o caracter de uma determinada posição do indice, o número do índice deve ser informado na consulta entre colchetes
let indiceString = "Um texto";

console.log(indiceString[4]);
console.log(indiceString[8]);
console.log(indiceString[-1]);
console.log(indiceString.charAt(6));
console.log(indiceString.charCodeAt(6)); // * Exibe o código do caracter na tabela asc

// * Modos de concatenação
console.log(umaString.concat('em um lindo dia.'));
console.log(umaString + 'em um lindo dia.');
console.log(`${umaString}em um lindo dia.`); //! Melhor forma

// * Para saber em qual indice começa determinada palavra
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('Texto')); //! Caso não seja localizado o resultado apresentado será -1


console.log(umaString.lastIndexOf('x')); // * A consulta é realizada iniciando do último caracter, de trás para frente

// Expressões regulares
console.log(umaString.match(/[a-z]/g)); // * Retorna todos carateres (definido pela letra "g") entre "a e z", minúsculos como definido no parametro [a-z]

console.log(umaString.match(/[a-z]/)); // * Retorna o primeiro carater entre "a e z", qual seu indice, o texto onde se encontra e o grupo, minúsculos como definido no parametro [a-z]

console.log(umaString.search(/[a-z]/)); // * Retorna o indice do primeiro carater entre "a e z", minúsculos como definido no parametro [a-z]

console.log(umaString.replace('Um', 'Outro')); // * Faz a troca da primeira palavra igual a informada no primeiro parâmetro, pelo texto informado no segundo parâmetro

console.log(umaString.replace(/t/, '#')); // * Consulta igual acima porém informado como expressão regular

console.log(umaString.replace(/t/g, '#')); // * Informando a flag "g" todos caracteres do texto igual ao informado no primeiro parâmetro serão substituidos


let maisTexto = "O rato roeu a rpoupa do rei de roma.";

console.log(maisTexto.split(' ')); // * Faz a divisão do texto em um array separando conforme o caracter informado, neste caso o " " (espaço)

console.log(maisTexto.split(' ', 3)); // * Faz a divisão conforme o exemplo acima, porém limitado a quantidade de palavras de acordo com o número informado no segundo parâmetro

console.log(maisTexto.toUpperCase()); // * Transforma todo texto em letras maísculas

console.log(maisTexto.toLowerCase()); // * Transforma todo texto em letras minúsculas