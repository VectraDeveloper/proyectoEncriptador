function encriptar() {
  let texto = document.getElementById("text_input").value;
  let parrafoInteractivo = document.getElementById("text_result");
  let placeHolderElemento = document.getElementById("text_input");

  placeHolder = placeHolderElemento.getAttribute("placeholder");

  let textoCifrado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  let caracteresEspeciales = validarElement();

  if (texto.trim().length === 0 && caracteresEspeciales === false) {
    // Activar cuando no haya texto y no haya carácteres especiales.
    shake();
    resturarElementos();
    restaurarVisibles();
  } else if (caracteresEspeciales == true) {
    shake2(); // Activar cuando haya carácteres especiales
  } else if (texto.length !== 0 && caracteresEspeciales === false) {
    // Activar cuando haya texto y no haya carácteres especiales
    ocultarElementos();
    elementosVisibles();
    parrafoInteractivo.textContent = textoCifrado;
  }
}

function desencriptar() {
  let texto = document.getElementById("text_input").value;
  let parrafoInteractivo = document.getElementById("text_result");
  let placeHolderElemento = document.getElementById("text_input");

  placeHolder = placeHolderElemento.getAttribute("placeholder");

  textoCifrado = texto
    .replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/ai/g, "a")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e");

  let caracteresEspeciales = validarElement();

  if (texto.trim().length === 0 && caracteresEspeciales === false) {
    // Activar cuando no haya texto y no haya carácteres especiales.
    shake();
    resturarElementos();
    restaurarVisibles();
  } else if (caracteresEspeciales == true) {
    shake2(); // Activar cuando haya carácteres especiales
  } else if (texto.length !== 0 && caracteresEspeciales === false) {
    // Activar cuando haya texto y no haya carácteres especiales
    ocultarElementos();
    elementosVisibles();
    parrafoInteractivo.textContent = textoCifrado;
  }
}
