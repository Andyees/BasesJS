// let consultabasededatos=()=>{
// return new Promise((resolve) => {
//     setTimeout(()=>{

// resolve()

//     },Math.random()*10000)
// })

// }



// saludar().then((res)=>{
//     console.log(res)
//     var responder="bien y vos"
//     console.log(responder)

// })
// console.log("me imprimo primero o depues")




// const insertaNum=()=>{

//     return new Promise((resolve) => {
//         const numero=Number(window.prompt("Introduce un numero"))
//         resolve(numero)
//     })
// }

// insertaNum().then((resp)=>{

//     if(isNaN(resp)){
//         console.log("la entrada no es un numero")
//     }
//     else{
//         console.log("El numero es "+resp )
//     }
// })

const funcion1=()=>{
return new Promise((resolve,reject) => {
    setTimeout(()=>{
   reject("Me resolvi soy la funcion 1")

    },Math.random()*1000)
})
}
const funcion2=()=>{
return new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("Me resolvi soy la funcion 2")

    },Math.random()*1000)
})
}
const funcion3=()=>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            reject("Me resolvi mal soy la funcion 3")
    
        },Math.random()*1000)
    })
    }
    


Promise.allSettled([funcion2(),funcion1(),funcion3()]).then((res)=>{
    res.forEach(resp=>{
        
        if(resp.status=="fulfilled"){
            console.log(resp)
        }
       })
    
}).catch((error)=>{
    console.log("error procesando"+error)

})

Promise.race([funcion2(),funcion1(),funcion3()]).then((res)=>{

    console.log(res +"race")
})
    .catch((error)=>{
        console.log("esto es un error"+error)

})
Promise.any([funcion2(),funcion1(),funcion3()]).then((res)=>{

    console.log(res +"any")
})
    .catch((error)=>{
console.log(error)
})