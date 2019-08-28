/* Funcionamento da cifra: 
Código ASC -> alfabeto vai de 65 a 90;
Transformando em ASC e revertendo dps para conseguir realizar a função:
(cod letra ASC - cod da 1ª letra + deslocamento)%tamanho do alfabeto) + cód. 1ª letra
Ex letra F:
(70 - 65 +7)%26+65
*/

window.cipher = {

  encode: encode,
  decode: decode
};
//essas funções vão ser chamadas no html pelos botões

function encode(key, encodeWord) {

  //Variável com string vazia para inserir o resultado da criptografia
  let encodedResult = "";
  let i;
  let encodeFormula;
  //Loop para fazer o cálculo em todas as letras da string
  for (i = 0; i < encodeWord.length; i++) {
    let indexLetter = encodeWord.charCodeAt(i);

    if (indexLetter >= 65 && indexLetter <= 90) {
      encodeFormula = ((indexLetter - 65 + key) % 26) + 65;
      let newLetter = String.fromCharCode(encodeFormula);
      //Resultado somando à string vazia
      encodedResult += newLetter;
    } else if (indexLetter >= 97 && indexLetter <= 122) {
      encodeFormula = ((indexLetter - 97 + key) % 26) + 97;
      let newLetter = String.fromCharCode(encodeFormula);
      //Caso de caracteres minúsculos
      encodedResult += newLetter;
    } else {
      //No caso de caracteres além dos colocados, deixar ele mesmo
      encodedResult += encodeWord[i];
    }
  }
  return encodedResult;
}

function decode(key, decodeWord) {
  let decodedResult = "";
  let i;
  let decodeFormula;

  for (i = 0; i < decodeWord.length; i++) {
    let indexLetter2 = decodeWord.charCodeAt(i);

    if (indexLetter2 >= 65 && indexLetter2 <= 90) {
      decodeFormula = ((indexLetter2 - 90 - key) % 26 + 90);
      let newLetter2 = String.fromCharCode(decodeFormula);
      decodedResult += newLetter2;
    } else if (indexLetter2 >= 97 && indexLetter2 <= 122) {
      decodeFormula = ((indexLetter2 - 122 - key) % 26 + 122);
      let newLetter2 = String.fromCharCode(decodeFormula);
      decodedResult += newLetter2;
    } else {
      decodedResult += decodeWord[i];
    }
  }
  return decodedResult;
}