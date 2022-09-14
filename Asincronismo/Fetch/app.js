const contenedor=document.getElementById("container_img")
const contenido=(url)=>{return `<img src="${url}" alt=""> ` }
const api="https://dog.ceo/api/breeds/image/randoms"
let button=document.getElementById("buscar")
let inputDog=document.getElementById("entrada_dog")


button.addEventListener("click",BuscarImagenPerro,false)

async function BuscarImagenPerro(){

    let url=(raza)=>{return"https://dog.ceo/api/breed/"+raza+"/images/random"}
try {
    if(inputDog.value.length<=0){
        alert("Por favor ingresar la raza del perro")
    }
    else{
    let raza=inputDog.value
    const resp=await fetch(url(raza))
    let JsonResp=await resp.json()

    if(resp.status===404){
        alert("no se encontro la pagina")
    }
    console.log(JsonResp)
    let imgdog=JsonResp.message
    contenedor.innerHTML=contenido(imgdog)
    
  
    }
    
    
} catch (error) {
    alert(error)
}


}

//BuscarImagenPerro()
