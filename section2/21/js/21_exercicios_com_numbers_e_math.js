const num = Number(prompt('Digite um número:'));
const numInf = document.getElementById('numInf');
const texto = document.getElementById('texto');

numInf.innerHTML = num;

texto.innerHTML = ' ';
texto.innerHTML += `<p>Raiz quadrada: <strong>${num ** 0.5}.</strong></p>`;
texto.innerHTML += `<p><strong>${num}</strong> é inteiro: <strong>${Number.isInteger(num)}.</strong></p>`;
texto.innerHTML += `<p><strong>${num}</strong> é NaN: <strong>${Number.isNaN(num)}.</strong></p>`;
texto.innerHTML += `<p>Arredondado para baixo: <strong>${Math.floor(num)}.</strong></p>`;
texto.innerHTML += `<p>Arredondado para cima: <strong>${Math.ceil(num)}.</strong></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${num.toFixed(2)}.</strong></p>`;