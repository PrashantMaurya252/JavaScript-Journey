//bind method generally used for creating new function with functionality of another function 

const airIndia={
    airLine:"Air India",
    iatacode:'LH',
    booking:[],
    book(flightNum,name){
        console.log(`${name} book a ticket in airline ${this.airLine} flight Number ${this.iatacode}${flightNum}`)
        this.booking.push({flight:`${this.airLine} ${this.iatacode}${flightNum}`,name})

    },
   
}

const euroWings={
    airLine:"Luftwansa",
    iatacode:"EW",
    booking:[]
}

const book=airIndia.book

// with bind method we create new function
const bookEW=book.bind(euroWings)
bookEW(23,'Steven')
console.log(bookEW)

const bookEW23=book.bind(airIndia,55)     // we give one parameter here
bookEW23("Martha")
console.log(bookEW23)                     // we only need to pass one argument


// Partial application
const addTax=(rate,value)=>value+value*rate
console.log(addTax(0.1,100))


//In bind method order of arguments is important
const Vat=addTax.bind(null,0.23)
// const Vat=(value)=>value+value*0.23
console.log(Vat(100))

//using call back

const addTaxRate=function(rate){
    return function(value){
        return value+value*rate
    }
}

console.log(addTaxRate(0.20)(200))
