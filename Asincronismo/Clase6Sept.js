
function SaludarAll(...nombres){
    console.log(nombres)

    for (let nombre of nombres) {
        console.log("Hola como estas "+nombre)
        
    }
}
let miarreglo= ["Andres","Santiago","Juan","Pedro"]
SaludarAll(...miarreglo)

let arreglo1=["h",2,4,true]
let arreglo2=["hola",100,null,NaN]

let arreglo3=[...arreglo1,...arreglo2]

let minimo=Math.min(...miarreglo)


function addOnlyNums (...args){

    const result=args.filter(arg=>typeof(arg)==="number")
    let suma=0
    for (const num of result) {
        suma+=num
    }
    console.log(suma)
}

let array=["1",2,5,true,10,null]

addOnlyNums(...array)

function combineTwoArrays(arr1,arr2){
    let arr=[...arr1,...arr2]
    console.log(arr)
}
combineTwoArrays(arreglo3,array)