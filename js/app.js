"use strict";
function main() {
  let inputotalCuenta = document.getElementById("bill");
  let inputorcentajePropina = document.getElementById("tip");
  let inputersonas = document.getElementById("peoples");

  let totalCuenta = parseFloat(inputotalCuenta.value) || 0;
  let porcentajePropina = parseInt(inputorcentajePropina.value || 0);
  let personas = parseInt(inputersonas.value) || 1;
  let print = document.getElementById("print");

  let totalPropina = calculaPropina(totalCuenta, porcentajePropina);
  let totalDividido = divideTotal(totalPropina, personas);
  let message = `El pago por persona es: ${totalDividido}`;
  
  if(totalCuenta <= 0 || porcentajePropina <= 0 ){
      let messangeError = "debes ingresar un total para la cuenta y\nun porcentaje de propina"
      print.innerText = `${messangeError}`;
  } else{
      print.innerText = `${message}`;
  }

}

function calculaPropina(total, porcentaje) {
  let result = (total * porcentaje) / 100 + total;
  return result;
}

function divideTotal(total, personas) {
  let result = total / personas;
  return result;
}