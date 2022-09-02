let fecha1=document.getElementById("fecha1")
let fecha2=document.getElementById("fecha2")

fecha2.addEventListener("change",compararDate,false)

function compararDate(){
   let date1=fecha1.valueAsDate
   let date2=fecha2.valueAsDate

   console.log(date1<date2?"valid":"invalida")

}