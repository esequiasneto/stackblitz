// Faça uma função em JavaScript que, recebendo como parâmetro um número real, digamos o
// saldo  de  uma  conta  corrente,  de  -999999999.99  a  999999999.99,  retorna  um  string  com  o
// valor  recebido  escrito  por  extenso;  retorne  undefined,  caso  o  valor  recebido  não  esteja  na
// faixa  estabelecida;  faça  a  função  de  forma  inteligente,  procurando  tornar  o  programa  mais
// curto e mais eficiente;
// Escreva um programa para obter um número na faixa solicitada via digitação para testar sua
// função;  dê  chances  para  o  usuário  digitar  e  redigitar,  quantas  vezes  forem  necessárias,  até
// que  digite  um  valor  correto;  permita  que  o  usuário  digite  quantos  números  desejar  ver
// escritos por extenso, sem limitações.
// Este  exercício  deverá  ser  entregue  como  tarefa  avaliativa  associada  à  aula
// assíncrona na qual ele foi atribuído.

const NUMERO_EXTENSO = {
  1: 'Um',
  2: 'Dois',
  3: 'Três',
  4: 'Quatro',
  5: 'Cinco',
  6: 'Seis',
  7: 'Sete',
  8: 'Oito',
  9: 'Nove',
  10: 'Dez',
  11: 'Onze',
  12: 'Doze',
  13: 'Treze',
  14: 'Catorze',
  15: 'Quinze',
  16: 'Dezesseis',
  17: 'Dezessete',
  18: 'Dezoito',
  19: 'Dezenove',
  20: 'Vinte',
  30: 'Trinta',
  40: 'Quarenta',
  50: 'Cinquenta',
  60: 'Sessenta',
  70: 'Setenta',
  80: 'Oitenta',
  90: 'Noventa',
  100: 'Cento',
  200: 'Duzentos',
  300: 'Trezentos',
  400: 'Quatrocentos',
  500: 'Quinhentos',
  600: 'Seiscentos',
  700: 'Setecentos',
  800: 'Oitocentos',
  900: 'Novecentos',
};

const MENOR_NUM = -999999999.99;
const MAIOR_NUM = 999999999.99;

function getExtenso(num) {
  let numSemZeros = parseInt(num, 10) + '';

  if (numSemZeros > 0) {
    let found = false;

    if (NUMERO_EXTENSO[numSemZeros]) {
      return NUMERO_EXTENSO[numSemZeros];
    } else {
      let extenso = '';
      let numbers = num.split('');
      numbers.reverse();

      let numeroEncontrado = false;

      for (let x in numbers) {
        let complemento = '';

        if (numeroEncontrado == false) {
          if (x == 0) {
            let novoNumero = numbers[1] + '' + numbers[x];

            if (NUMERO_EXTENSO[novoNumero] != null) {
              complemento = NUMERO_EXTENSO[novoNumero];
              numeroEncontrado = true;
            } else {
              complemento = NUMERO_EXTENSO[numbers[x]];
            }
          } else if (x == 1) {
            complemento = NUMERO_EXTENSO[numbers[x] + '0'];
          } else if (x == 2 && NUMERO_EXTENSO[numbers[x]] != null) {
            complemento = NUMERO_EXTENSO[numbers[x] + '00'];
          }

          if (complemento && complemento != '') {
            if (extenso != '') {
              extenso = complemento + ' e ' + extenso;
            } else {
              extenso = complemento + extenso;
            }
          }
        } else {
          numeroEncontrado = false;
        }
      }

      return extenso;
    }
  }

  return null;
}

function montarExtenso(extensoMilhoes, extensoMilhares, extensoCentenas) {
  let numeroExtenso = '';

  if (extensoMilhoes != null && extensoMilhoes != '') {
    numeroExtenso += extensoMilhoes + ' milhões ';
  }

  if (extensoMilhares != null && extensoMilhares != '') {
    numeroExtenso += extensoMilhares + ' mil ';
  }

  if (extensoCentenas != null && extensoCentenas != '') {
    numeroExtenso += extensoCentenas;
  }

  return numeroExtenso;
}

function prepararNumeros(num) {
  // Preenche com zeros a esquerda
  while (num.length < 9) {
    num = '0' + num;
  }

  // calcula separadamente cada 3 numeros
  let extensoMilhoes = getExtenso(num.substr(0, 3));
  let extensoMilhares = getExtenso(num.substr(3, 3));
  let extensoCentenas = getExtenso(num.substr(6, 3));

  return montarExtenso(extensoMilhoes, extensoMilhares, extensoCentenas);
}

function main() {
  let num = prompt('Digite um número entre :' + MENOR_NUM + ' e ' + MAIOR_NUM);

  if (num > MAIOR_NUM || num < MENOR_NUM) {
    alert('Você digitou um numero invalido!');
  }

  let numeroExtenso = prepararNumeros(num);

  alert(numeroExtenso);
}

main();
