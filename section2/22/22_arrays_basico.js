const alunos = ['Marcelo', 'Caio', 'Ana', 'Aline'];

console.log(alunos); // * Consulta dos elementos de todo array

console.log(alunos[0]); // * Consulta do elemento do array "0"

console.log(alunos[3]); // * Consulta do elemento do array "3"

alunos[0] = 'Marcondes'; // * Editando o elemento do array "0"

console.log(alunos);

alunos[4] = 'Sandra'; // * Insere um novo elemento no fim do array

console.log(alunos);

alunos[alunos.length] = 'Andréa'; // * Insere um novo elemento no fim do array

console.log(alunos);

alunos.push('Cristiane'); // * Insere um novo elemento no fim do array

console.log(alunos);

alunos.unshift('Rodolfo'); // * Insere um novo elemento no início do array

console.log(alunos);

alunos.pop(); // * Remove o último elemento do array

console.log(alunos);

const removeFim = alunos.pop(); // * Remove o último elemento do array

console.log(removeFim); // * Exibe o elemento removido do array no camando acima

console.log(alunos);

const removeInicio = alunos.shift(); // * Remove o primeiro elemento do array

console.log(removeInicio); // * Exibe o elemento removido do array no camando acima

console.log(alunos);

delete alunos[1]; // * Remove o elemento do índice informado porém não há alteração nos indices, os indices continuam os mesmos porém o que teve o elemento excluido permanece vazio

console.log(alunos);

console.log(alunos[10]); // * Ao consultar um índice que não existe o retornoserá a mensagem "undefined", sem que aconteça nenhum erro

console.log(alunos.slice(0, 3)) // * Realiza consulta dos elementos que estiverem entre os indices informados no primeiro e segundo parâmetro da consulta

console.log(typeof alunos); // * O JavaScript classfica o tipo do array como objeto

console.log(alunos instanceof Array); // * Para saber se o conjunto de elementos é um array pode-se perguntar ao JavaScript