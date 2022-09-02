let titulos= document.querySelectorAll("#title")
let container=document.getElementById("contenedor")
let titulo= document.getElementById("title")
let tituloClase=document.getElementsByClassName("titulo")
let tituloTag=document.getElementsByTagName("h1")
let Input_nombre=document.getElementById("Input-Name")
let Input_apellido=document.getElementById("inputLastName")
let Input_cedula=document.getElementById("input_cedula")
let button=document.getElementById("buttonP")
let title=document.getElementById("Titulo")
let containerNames=document.getElementById("Container_names")
let htmlLista=` <ul>
<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>
<li>5</li>

</ul>
`
let buttonDelete=document.getElementById("buttonEliminar")



window.addEventListener("load",LoadPage,false)
button.addEventListener("click",CambiarColor,false)
Input_nombre.addEventListener("keyup",CambiarColor,false)
button.addEventListener("click",GuardarLocalStorage,true)
buttonDelete.addEventListener("click",EliminarLocalStorage,false)





function Eliminar(value){

 let cedula=value
  localStorage.removeItem(cedula)
  FlagEncontrado=true
  alert("Se ha eliminado el elemento")
  LoadPage()

    

}

function cargarRenderizado(){
buttonDelete2=document.querySelectorAll(".buttonElement")
for (let index = 0; index < buttonDelete2.length; index++) {
    buttonDelete2[index].addEventListener("click",()=>{Eliminar(buttonDelete2[index].value)},false)
}
//


}


function EliminarLocalStorage(){
 
    let cedula =Input_cedula.value
    if(cedula==null || cedula==""){

        alert("ingrese un valor en el campo cedula ")
    }

    else{

        let FlagEncontrado=false
        for (let index = 0; index < localStorage.length; index++) {

            if(localStorage.key(index)==cedula ){
              
            }
        }
        if(FlagEncontrado){
            alert("Se ha eliminado el elemento")
        }
        else{

            alert("El elemento no se encuentra en localstorage")
        }

        
        LoadPage()
    }

}


function GuardarLocalStorage()
{

let nombre = Input_nombre.value
let apellido =Input_apellido.value
let cedula =Input_cedula.value
const persona={nombre:nombre,apellido:apellido,cedula:cedula}
localStorage.setItem(cedula, JSON.stringify(persona));
LoadPage()
}

function LoadPage(){
containerNames.innerHTML=""
for (let index = 0; index < localStorage.length; index++) {
let clave=localStorage.key(index)
let persona=JSON.parse(localStorage.getItem(clave))
let contenido = `<div class="persona"><p class="${clave}" id="nombre_view">${persona.nombre+" "+persona.apellido+" "+persona.cedula} </p> <button id="" value="${clave}" class="btn btn-danger buttonElement">Delete</button> </div>`    
containerNames.innerHTML+=contenido
Input_apellido.value=""
Input_nombre.value=""
Input_cedula.value=""



}

setTimeout(()=>{
    container.style.backgroundColor="red"
    
},2000)


setTimeout(()=>{cargarRenderizado()},500)
    
}

function CambiarColor(){

    let colorCode="0123456789ABDCDEF" 
    let finalcode="#"

    for(let counter =0; counter<6;counter++){

    finalcode=finalcode+colorCode[Math.floor(Math.random()*16)]
    }
    container.style.backgroundColor=finalcode
   setTimeout(()=>{cargarRenderizado()},2000 )

}
















    
function hidden(){
    container.style.display="none"
}

function addText(element,texto){
    setTimeout(()=>{
        element.append(" " +texto)
    
    },2000)
 
}
function addhtml(element,html){
    setTimeout(()=>{
        element.innerHTML+=html
    },2000)
  
}
function changeAttributte(element,namefield,value){
    setTimeout(()=>{
        element.setAttribute(namefield,value)
    },2000)
    
}

function changeClass(element,nameclass){
   setTimeout(()=>{element.classList.toggle(nameclass)},3000)
    

}
function addClass(element,nameclass){
    setTimeout(()=>{element.classList.add(nameclass)},3000)
     
 
 }

function SetValueInput(element,value){
setTimeout(()=>{
    element.setAttribute("value",value)
},2000)
  
}

// addText(container,"estos es un div")
// addText(titulo,"Gracias")
// changeAttributte(Entrada,"type","text")
// SetValueInput(Entrada,"Lionel Messi")
// addhtml(container,htmlLista)

// changeClass(container,"contenedor")


// addClass(container,"contenedorRojo")

// let lista=document.createElement(htmlLista)





