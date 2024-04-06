/* =========================
   ====== Validación =======
   ========================*/

function validarElement() {
  const textArea = document.getElementById("text_input");

  // Expresión regular para comprobar caracteres especiales
  const regex = /[A-ZáéíóúüÁÉÍÓÚÜ@#$%^&*()_+\-=\[\]{};':"\\|<>\/¿?]+/;

  return regex.test(textArea.value);
}

/* =========================
   ==== Animación Shake ====
   ========================*/

function shake() {
  const elemento = document.getElementById("title_message");

  elemento.style.animation = "shake 0.5s ease-in-out";

  setTimeout(() => {
    elemento.style.animation = "";
  }, 500);
}


function shake2() {
  const elemento = document.getElementById("allowed_text");

  elemento.style.animation = "shake 0.5s ease-in-out";

  setTimeout(() => {
    elemento.style.animation = "";
  }, 500);
}

function shake3() {
  const elemento = document.getElementById("text_input");

  elemento.style.animation = "shake 0.5s ease-in-out";

  setTimeout(() => {
    elemento.style.animation = "";
  }, 500);
}

/* =========================
   ==== Función ocultar ====
   ========================*/

function ocultarElementos() {
  const elementos = document.querySelectorAll(
    ".div_area_search > img, .search_message > h3.text_static_tittle, .search_message > p.text_static"
  );
  const divElemento = document.querySelectorAll(
    "section.child_message div.search_message"
  );

  // Iterar sobre cada elemento seleccionado
  elementos.forEach((elemento) => {
    elemento.style.display = "none";
  });

  divElemento.forEach((elementoDiv) => {
    elementoDiv.style.height = "67.5%";
  });
}

function elementosVisibles() {
  const elementos = document.querySelectorAll(
    "div.search_message p.text_interactive, button.button_copy"
  );

  elementos.forEach((elemento) => {
    elemento.style.display = "block";
  });
}

/* ========================
   ==== Función visble ====
   ========================*/

function resturarElementos() {
  const elementos = document.querySelectorAll(
    ".div_area_search > img, .search_message > h3.text_static_tittle, .search_message > p.text_static"
  );
  const divElemento = document.querySelectorAll(
    "section.child_message div.search_message"
  );

  // Iterar sobre cada elemento seleccionado
  elementos.forEach((elemento) => {
    elemento.style.display = "inline-block";
  });

  divElemento.forEach((elementoDiv) => {
    elementoDiv.style.height = "auto";
  });
}

function restaurarVisibles() {
  const elementos = document.querySelectorAll(
    "div.search_message p.text_interactive, button.button_copy"
  );

  elementos.forEach((elemento) => {
    elemento.style.display = "none";
  });
}

/* =========================
   ==== Función Copiado ====
   =========================*/

function copiarTexto() {
  let textoInsertado = document.getElementById("text_result");
  let texto = document.getElementById("text_result").textContent;
  let botonCopiar = document.getElementById("button_interactive");

  navigator.clipboard
    .writeText(texto)
    .then(() => {
      botonCopiar.textContent = "COPIADO";
      setTimeout(() => {
        botonCopiar.textContent = "COPIAR";
      }, 1200);
    })
    .catch((err) => {
      console.error("Error al copiar texto al portapapeles:", err);
    });
}
