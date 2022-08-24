let car=new  Object()

car.model="Fiat"
car.year=2000
car.puertas=4



let car2= { marca:"Ford",
            model:"Mustang",
            year:2000

}

car2.marca="toyota"
// console.log(car2["marca"])

for (const key in car) {
    
        console.log(car[key])

}

