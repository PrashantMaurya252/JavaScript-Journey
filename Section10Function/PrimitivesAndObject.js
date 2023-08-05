const flightNumber='LH555'
const jonas={
    name:"Prashant Maurya",
    passport:666777888
}
const checkIn=function(flightNum,passenger){
    flightNum='LH444'
    passenger.name='Mr '+passenger.name

    if(passenger.passport===666777888){
        console.log('You can checkIn')
    }else{
        console.log('Wrong Passport')
    }
}
checkIn(flightNumber,jonas)
console.log(flightNumber)
console.log(jonas)

const newPassport=function(person){
    person.passport=Math.trunc(Math.random()*1000000)
}
newPassport(jonas)
checkIn(flightNumber,jonas)             //object pointed out at same reference