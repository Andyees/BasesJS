
// While

let semaforo=true
let contador=0
while(semaforo){

contador++
if(contador>100){semaforo=false}

console.log("hola mundo"+contador) 

}

//for

let colores=["Azul","rojo","Naranja","Morado","verde","rosado","Amarillo"]
 
for (let index = 0; index < colores.length; index++) {

    console.log(colores[index])
    
}

//do while

let semaforo2=false

do
{
console.log("Hola mundo Do WHILE")

}

while(semaforo);

//For in

const objeto={name:"Andres",Apellido:"Agudelo",edad:18,cargo:"Profesor"}

for (const key in objeto) {
    
    console.log(key +" el valor es:"+objeto[key])

        
    }



