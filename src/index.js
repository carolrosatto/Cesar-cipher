//Esse arquivo está separado por questão de organização, está relacionado com os eventos do DOM
//colocar as funções de click
//Nessa função do botão estamos chamando a função de codificar feita no cipher.js para ser disparada quando o usuário clicar no botão

document.getElementById("encodebutton").addEventListener ("click", function encodeBtnFunction() {
  let encodeWord = document.getElementById("encodetext").value;
  let key = parseInt(document.getElementById("cipherkey").value);
  document.getElementById("etext").innerHTML = window.cipher.encode(key, encodeWord);
});

document.getElementById("decodebutton").addEventListener ("click", function decodeBtnFunction() {
  let decodeWord = document.getElementById("decodetext").value;
  let key = parseInt(document.getElementById("cipherkey").value);
  
  document.getElementById("dtext").innerHTML = window.cipher.decode(key, decodeWord);
    
});