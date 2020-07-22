let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(varA, varB, varC);

let temp = varA;

varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC);

//

let varD = 'D';
let varE = 'E';
let varF = 'F';

console.log(varD, varE, varF);

[varD, varE, varF] = [varE, varF, varD];

console.log(varD, varE, varF);