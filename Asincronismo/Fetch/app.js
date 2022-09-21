const contenedor=document.getElementById("container_img")
const contenido=(url,subraza)=>{return `<img src="${url}" alt="">   <h1>${subraza}</h1>` }
const api="https://dog.ceo/api/breeds/image/randoms"
let button=document.getElementById("buscar")
let inputDog=document.getElementById("entrada_dog")


button.addEventListener("click", ()=>{let objeto=  PromesasBuscarSubrazasPerro(); 
    console.log(objeto)
   // renderizaSubrazas(objeto.Subrazas,objeto.raza)
})


async  function BuscarSubrazasPerro(){
    contenedor.innerHTML=""
    let url=(raza)=>{return"https://dog.ceo/api/breed/"+raza+"/list"}
try {
    if(inputDog.value.length<=0){
        alert("Por favor ingresar la raza del perro")
    }
    else{
    let raza=inputDog.value
    const resp=await fetch(url(raza))
    if(resp.status===404){
        alert("no se encontro la raza")
    }
    else{
    let JsonResp=await resp.json()
    console.log(JsonResp.message)
    return  {"Subrazas":JsonResp.message,"raza":raza}
}}} 

catch (error) {
        alert(error)
    }}
    
   
    async function renderizaSubrazas(Arraysubreeds,raza){
    try{

    for (const iterator of Arraysubreeds) {

    const resp=await fetch("https://dog.ceo/api/breed/"+raza+"/"+iterator+"/images/random")
    let JsonResp=await resp.json()
    contenedor.innerHTML+=contenido(JsonResp.message,iterator)


    if(resp.status===404){
        alert("no se encontro la pagina")
    }
    console.log(JsonResp)
   
    }
  
    }
    catch(error){
        alert(error)
    }
}



function PromesasBuscarSubrazasPerro(){
    let objetosubrazas
    contenedor.innerHTML=""
    let url=(raza)=>{return"https://dog.ceo/api/breed/"+raza+"/list"}

    if(inputDog.value.length<=0){
        alert("Por favor ingresar la raza del perro")
    }


    else{
    let raza=inputDog.value
    fetch(url(raza)).then((resp)=>{
        if(resp.status===404){
            alert("no se encontro la raza")
        }
        else{
        return resp.json()}}).then((data)=>{

            console.log(data.message)
            objetosubrazas= {"Subrazas":data.message,"raza":raza}
            console.log(objetosubrazas)
            
        })
    .catch((error)=>{
        console.log("se presento un error "+error)
    })

}

}





//BuscarImagenPerro()
