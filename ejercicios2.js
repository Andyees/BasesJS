function ConvertirCadena(cadena){
   let CadenaConvert;
    

   let arreglo= cadena.split(" ")

  arreglo.forEach((value,index)=>{

    let Palabra_Mayuscula=value[0].toUpperCase()
    Palabra_Mayuscula+=value.substring(1,arreglo[index].length)
    arreglo[index]=Palabra_Mayuscula

  })

//    for (let index = 0; index < arreglo.length; index++) {
  
//     let Palabra_Mayuscula=arreglo[index][0].toUpperCase()
//     Palabra_Mayuscula+=arreglo[index].substring(1,arreglo[index].length)
//     arreglo[index]=Palabra_Mayuscula

//    }

  CadenaConvert=arreglo.join(" ")

    return CadenaConvert
}


console.log(ConvertirCadena("tengo mucha hambre"))




const FunctionContarVocales=function(cadena){
    let contador=0
    let arreglo =cadena.split("")
arreglo.forEach((letra)=>{
    if(letra=="a" || letra=="e"|| letra=="i"||letra=="o"||letra=="u"){
        contador++
       }

})

    // for (let index = 0; index < arreglo.length; index++) {
    //     let letra=arreglo[index]
    //     if(letra=="a" || letra=="e"|| letra=="i"||letra=="o"||letra=="u"){

    //      contador++
    //     }
        
    // }

    return contador
}
console.log(FunctionContarVocales("hola como estas bien o noaaaa"))


function RealizarAccion(cadena,callback,callback2){

   console.log(callback(cadena))
   console.log(callback2(cadena))  
   
}


function imprimir(){

    console.log("hola mundo")
}




//setTimeout(imprimir,3000)

//console.log(FunctionContarVocales("hola mundo ola"))
//console.log(ConvertirCadena("hola mundo"))



//RealizarAccion("hola mundo",ConvertirCadena,FunctionContarVocales)




