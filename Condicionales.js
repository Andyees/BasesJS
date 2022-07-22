let texto=prompt("Ingresa un mensaje")

let VariableBusqueda=prompt("Ingrese el valor que piensas buscar y reemplazar en la anterior cadena que ingresaste")

let reemplazo= prompt("ingrese la palabra susituta")

let numerostart =prompt("Ingrese el numero inicial de la cadena")

let numeroend =prompt("ingrese el numero final de la cadena")



if(texto.includes(VariableBusqueda)){

    


    texto=texto.replace(VariableBusqueda,reemplazo)

}

else{

console.log("No se encontro la palabra clave " +VariableBusqueda)

console.log(texto.substring(numerostart,numeroend))

}

