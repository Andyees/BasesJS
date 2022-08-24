// function calculateDogAge(EdadCachorro,tasa){


//     console.log("Tu perrito tiene "+EdadCachorro*tasa+" años en años de perro!")
// }

// calculateDogAge(9,7)
// calculateDogAge(5,6)
// calculateDogAge(3,5)







function valoresDuplicados (){

    let array = ['hola',1,2,'hola',1,8,9,9,4,3,6,7,8,3]

    let resultado = []
    let pocisionRepetido =[]

   for (let index = 0; index < array.length; index++) {
    let saltar
      for (let pocision = 0; pocision < pocisionRepetido.length; pocision++) {
        if(pocisionRepetido[pocision]==index){
        saltar =true
        }
            }
        if(saltar){
            continue    
        }
   

        let valor1 = array[index];

        for (let index2 = 0; index2 < array.length; index2++) {
   
            let valor2 = array[index2];

            if (index == index2) {

                continue

            }

            if (valor1 == valor2) {   
                pocisionRepetido.push(index2)
                resultado.push(valor1)

            }      

        }

   

   }

   console.log(resultado)

}



function CountDigitos(number){
 
    let CadenaNumero=number.toString()
    console.log(CadenaNumero.length)

}


function FindNumberMayor(arreglo){

let NumeroMayor= Math.min.apply(null,arreglo)
// let NumeroMayor=Math.max(...arreglo)
console.log(NumeroMayor)



}

function ConvertToArrayNumber(number){
 
    let cadenanumero=number.toString()

    let arreglo=cadenanumero.split("")

    console.log(arreglo)

}

function validarPalíndromo(cadena){

    for (let index = 0; index < cadena.length; index++) {
        if(cadena.charAt(index)!=cadena.charAt(cadena.length-index-1)){
            return false
        }
        
    }
    return true
}


function CountCharacter(cadena,character){

    let arregloCadena= cadena.split("")
    let CountChar=0
    for (let index = 0; index < arregloCadena.length; index++) {
      if(character==arregloCadena[index]){

        CountChar++
      }
        
    }
    return CountChar


}

console.log(CountCharacter("hola como estas","e"))

function ExtractString(cadena){

    if((cadena.length % 2)==0){
    let tamaño=cadena.length
    let sizehalf=tamaño/2
     
    cadenaHalf=cadena.substring(0,sizehalf)

    console.log(cadenaHalf)
    }
    else
    {
        console.log("La longitud de la cadena no es uniforme")
    }

}

function Concatenar(cadena1, cadena2){

    return cadena1.substring(1,cadena1.length)+" "+cadena2.substring(1,cadena2.length)
}
