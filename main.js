function menu(tramites) {
  let menu ="Tramites disponibles:";
  for (let i = 0; i <= (tramites.length - 1); i++) {
    menu += `
    ${tramites[i].id}) ${tramites[i].nombre}`;
  }
  menu += "Que tramite desea hacer: [proporciona el número del tramite]";
  return menu
}

function proceso(datos) {
  if (datos.vigente) {
    alert(datos.descripcion);
  } else {
    alert("lo sentimos, el tramite no esta disponible");
  }
}

function busqueda(id) {
  let info = null
  for (let i = 0; i <= (tramites.length - 1); i++) {
    console.log("veces", i);
    if(tramites[i].id === id) {
      info = tramites[i];
      break;
    }
  }

  return info;
}

alert("Bienvenido a Asociados")
let siguiente = true;
while(siguiente) {
  const respuesta = prompt(menu(tramites)); // string

  let datos = null; // {}

  switch(respuesta) {
    case "1":
      datos = busqueda(1);
      proceso(datos);
      break;
    case "2":
      datos = busqueda(2);
      proceso(datos);
      break;
    case "3":
      datos = busqueda(3);
      proceso(datos);
      break;
    case "4":
      datos = busqueda(4);
      proceso(datos);
      break;
    case "5":
      datos = busqueda(5);
      proceso(datos);
      break;
    default:
      alert("Lo sentimos, no detectamos el tramite");
  }

  const nuevo = prompt("Desea un nuevo tramite: [s/n]");
  siguiente = nuevo === 's';
}

alert("Muchas gracias");
