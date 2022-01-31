const enviar_datos_formulario = () => {
  let run = document.getElementById("RUN").value;
  let nombre = document.getElementById("fullName").value;
  let fechaNacimiento = document.getElementById("fechaDeNacimiento").value;
  let correoElectronico = document.getElementById("email").value;
  let numTelefonico = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let ciudad = document.getElementById("ciudad").value;
  let comuna = document.getElementById("comuna").value;
  let numDocumento = document.getElementById("numDocumento").value;

  const persona = {
    run,
    nombre,
    fechaNacimiento,
    correoElectronico,
    numTelefonico,
    direccion,
    ciudad,
    comuna,
    numDocumento
  }

  console.log(persona);

  run = document.getElementById("RUN").value = "";
  nombre = document.getElementById("fullName").value = "";
  fechaNacimiento = document.getElementById("fechaDeNacimiento").value = "";
  correoElectronico = document.getElementById("email").value = "";
  numTelefonico = document.getElementById("telefono").value = "";
  direccion = document.getElementById("direccion").value ="";
  ciudad = document.getElementById("ciudad").value ="";
  comuna = document.getElementById("comuna").value ="";
  numDocumento = document.getElementById("numDocumento").value ="";
}
