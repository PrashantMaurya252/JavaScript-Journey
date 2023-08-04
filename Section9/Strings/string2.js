const airLine='Air India'
const plane='B101'
console.log(airLine.toUpperCase())
console.log(airLine.toLowerCase())

// Fixing Capitalization
const str='pRashant'
const strLower=str.toLowerCase()
const strCorrect=strLower[0].toUpperCase() +strLower.slice(1)
console.log(strCorrect)

// Email Comparing

const email='hello@jonas.io'
const loginEmail='   Hello@jonas.io \n'
const normalizedEmail=loginEmail.toLowerCase().trim()
console.log(normalizedEmail)

if(email===normalizedEmail){
    console.log('Email is correct')
}

//replacing
const announcement='All Passengers please come to door number 23,Hurry up come door number 23 !'
console.log(announcement.replaceAll('door','gate'))
console.log(announcement.replace(/door/g,'gate'))

//replacing chaining
const moneyInd='298,34&'
const moneyUs=moneyInd.replace('&','$').replace(',','.')
console.log(moneyUs)

//boolean
const flight='Airbus A320neo'
console.log(flight.includes('A320')) //true
console.log(flight.includes('Boing'))  //false
console.log(flight.startsWith('Air'))  //true
console.log(flight.startsWith('Aib'))   //false

//Practice

const checkBaggage=function(items){
    const baggage=items.toLowerCase()
    if(baggage.includes('knife')|| baggage.includes('gun')){
        console.log('You are Not allowed')
    }else{
        console.log("Welcome aboard !")
    }
}
checkBaggage("I have a Gun")
checkBaggage("I have some snacks")
checkBaggage("I have a knife")