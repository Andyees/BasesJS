
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