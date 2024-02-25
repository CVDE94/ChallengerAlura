//--------------------------
const originBtnAction = document.getElementById("btn_action").textContent;
const originLbResult = document.getElementById("lb_result").textContent;
// Encriptador
const enc = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const desc = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

window.addEventListener('load', loadScript);

async function loadScript(){
  await textEncriptToDecrypt()
}



function textEncriptToDecrypt(){
    const itOrigin = document.getElementById('it_origin');
    const btnAction = document.getElementById('btn_action');
    const lbResult = document.getElementById('lb_result');

    // Actualizar el texto del botón según la selección del radio button
    const radioButtons = document.querySelectorAll('input[name="r_option"]');
    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('change', () => {
            const selectedValue = radioButton.value;
            btnAction.textContent = selectedValue === '1' ? 'Encrypt' : 'Decrypt';
            lbResult.textContent = selectedValue === '1' ? 'Resultado encriptado:' : 'Resultado desencriptado:';
        });
    });
}

//--------------------------
function soloMinusculas(input) {
  const valorMinusculas = input.value.toLowerCase();
  const valorFiltrado = valorMinusculas.replace(/[^a-z ]/g, "");
  input.value = valorFiltrado;
}
//---------------------------
function copiar() {
  const resultado = document.getElementById("it_list").value;
  navigator.clipboard.writeText(resultado);
  document.getElementById("it_origin").value=resultado;
}
//---------------------------
function validar() {
  const img_main = document.getElementById("img_main").src;
  const img_alert = "./img/cat-cats-9.gif";
  const txt_alert = "Ingresa algun valor";
  const txtInput = document.getElementById("it_origin");

  if (txtInput.value.trim().length === 0) {
    // No hay texto en el input
    document.getElementById("img_main").src = img_alert;
    document.getElementById("lb_img_main").textContent = txt_alert;
    setTimeout(() => {
      document.getElementById("img_main").src = img_main;
      document.getElementById("lb_img_main").textContent = "";
    }, 3000);
    return;
  }
  validateOption();
}
//-----------------------------
function validateOption() {
  let radioButtons = document.getElementsByName("r_option");
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      // Este botón de radio está seleccionado
      const valorSeleccionado = radioButtons[i].value;
      console.log("Valor seleccionado:", valorSeleccionado);

      // Realiza acciones en base al valor seleccionado:
      if (valorSeleccionado === "1") {
        encriptar();
      } else if (valorSeleccionado === "2") {
        desencriptar();
      }
      break; // No es necesario continuar iterando una vez que se encuentra un botón seleccionado
    }
  }
}

function desencriptar() {
  let texto = document.getElementById("it_origin").value;
  let textodesencriptado = texto.replace(
    /ai|enter|imes|ober|ufat/g,
    (match) => {
      return desc[match];
    }
  );

  return (document.getElementById("it_list").value = textodesencriptado);
}

function encriptar() {
  let texto = document.getElementById("it_origin").value;
  let cadenaEncriptada = texto.replace(/a|e|i|o|u/g, (match) => {
    return enc[match];
  });
  document.getElementById("it_origin").value="";
  return document.getElementById("it_list").value = cadenaEncriptada ;
}

/*
let counter=0;
function selectItem(item){
  let selectedID = item.id;
  console.log("El item seleccionado fue: ", selectedID);
}

function addOption(newInfo){
  counter++;
  let newParagraph = document.createElement("p");
  newParagraph.id = "item_" + counter;
  newParagraph.onclick="selectItem(this)"
  newParagraph.textContent = newInfo;
  document.querySelector("#myList").prepend(newParagraph);
}

*/


function clean(){
  document.getElementById("it_origin").value="";
  document.getElementById("it_list").value="";
  document.getElementById("opc1").checked=true;
  document.getElementById("btn_action").textContent= originBtnAction;
  document.getElementById("lb_result").textContent= originLbResult;
  return
}