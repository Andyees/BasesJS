
// 1 ejercicio.
let numero = prompt("Ingrese por favor un numero de 3 digitos");

if(numero.length<=3){

   // console.log(numero.split("").reverse().join(""))
   let stringreverse=""
   for (let index = numero.length-1; index >=    0; index--) {

    stringreverse=stringreverse+numero[index]
      
   
   }

   console.log(stringreverse)

}
else{

    console.log("El numero no es de 3 digitos")

}

console.log("fin")


// 2 ejercicio

let today =new Date()

