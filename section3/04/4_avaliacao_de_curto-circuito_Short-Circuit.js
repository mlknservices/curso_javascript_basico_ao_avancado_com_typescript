// * "Em operações com && (and) assim que for identifcado um valor FALSE a validação para e retorna o valor real falseável 'FALSY', e caso nenhum valor falso seja encotrado será retornado o último valor da consulta"
console.log('Marcelo Marcondes' && 0 && 'Aline Soares');

console.log('Marcelo Marcondes' && true && 'Aline Soares');

//

function falaOi () {
    return 'Oi';
}

const   naoVaiExecutar = false;

console.log(naoVaiExecutar && falaOi());

//

const   vaiExecutar = true;

console.log(vaiExecutar && falaOi());

//

// * Or precisa de apenas uma expressão verdadeira para rertornar o valor verdadeiro, e será retornado o valor real do primeiro parâmetro TRUE
console.log(0 || false || null || 'Marcelo Marcondes' || true);

//

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

//

const corUsuario2 = 'vermelho';
const corPadrao2 = corUsuario2 || 'preto';

console.log(corPadrao2);

//

const a = 0 ;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

//

// * "Caso todos os valores sejam falsos ou falseáveis (FALSY) será exibido o valor do último parâmertro da pesquisa"
const f = 0 ;
const g = null;
const h = false;
const i = false;
const j = NaN;

console.log(f || g || h || i || j);