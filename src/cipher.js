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
  let strToUpper = encodeWord.toUpperCase();
  //Variável com string vazia para inserir o resultado da criptografia
  let encodedResult = "";
  let i;
  //Loop para fazer o cálculo em todas as letras da string
  for (i = 0; i < strToUpper.length; i++) { 
    
    let indexLetter = strToUpper.charCodeAt(i);
  
    if (indexLetter >= 65 && indexLetter <= 90) {
      let encodeFormula = ((indexLetter - 65 + key)%26 )+ 65;
      let newLetter = String.fromCharCode(encodeFormula);
      //Resultado somando à string vazia
      encodedResult += newLetter;
    } else {
      //No caso de caracteres além dos colocados, deixar ele mesmo
      encodedResult += strToUpper[i];
    }          
  }
  return encodedResult;
}

//No decode é o mesmo processo, porém subtrai o deslocamento
function decode(key, decodeWord) {
  let StrToUpper2 = decodeWord.toUpperCase();
  let decodedResult = "";
  let i;

  for (i = 0; i < StrToUpper2.length; i++) {
    let indexLetter2 = decodeWord.charCodeAt(i);

    if (indexLetter2 >= 65 && indexLetter2 <= 90) {
      let decodeFormula = ((indexLetter2 - 65 - key)%26 + 65);
      let newLetter2 = String.fromCharCode(decodeFormula);

      decodedResult += newLetter2;
    } else {
      decodedResult += StrToUpper2[i];
    }
  }
  return decodedResult;
}