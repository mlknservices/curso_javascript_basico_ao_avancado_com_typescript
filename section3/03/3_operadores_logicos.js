// * "&&" -> "AND" -> "E" (Todas as expressões precisam ser verdadeiras para retorna "true")

const expressaoAnd = true && true && false && true;
console.log(expressaoAnd);

const expressaoAnd2 = true && true && true && true;
console.log(expressaoAnd2);


// * "||" -> "OR" -> "OU" (Pelo menos uma das expressões precisa ser verdadeira para retorna "true")

const expressaoOr = true || true;
console.log(expressaoOr);

const expressaoOr2 = true || false;
console.log(expressaoOr2);

const expressaoOr3 = false || false;
console.log(expressaoOr3);


// * "!" -> "NOT" -> "NÂO" (Negação)

console.log(!false);

console.log(!!true);