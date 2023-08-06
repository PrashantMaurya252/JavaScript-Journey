const airIndia={
    airLine:"Air India",
    iatacode:'LH',
    booking:[],
    book(flightNum,name){
        console.log(`${name} book a ticket in airline ${this.airLine} flight Number ${this.iatacode}${flightNum}`)
        this.booking.push({flight:`${this.airLine} ${this.iatacode}${flightNum}`,name})

    },
   
}
airIndia.book(5566,"Prashant")
airIndia.book(4433,'Kumar')
console.log(airIndia)

const euroWings={
    airLine:"Luftwansa",
    iatacode:"EW",
    booking:[]
}

const book=airIndia.book
book.call(euroWings,23,'Sarah')
console.log(euroWings)
book.call(airIndia,239,'Kumar')
console.log(airIndia)

const swiss={
    airLine:'SwissAirLine',
    iatacode:'UX',
    booking:[]
}
book.call(swiss,78,'Maurya')
console.log(swiss)


//apply method

const flightData=[583,'Prashant']
book.apply(swiss,flightData)
console.log(swiss)

//another way of apply method

book.call(airIndia,...flightData)
console.log(airIndia)