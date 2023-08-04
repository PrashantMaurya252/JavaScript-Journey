const airLine="Air India"
const plane="A320"
console.log(plane[0])
console.log(plane[1])
console.log(airLine.length)
console.log('B101'[0])
console.log(airLine.indexOf("A"))
console.log(airLine.indexOf('a'))
console.log('B101'.length)
console.log(airLine.indexOf('i'))
console.log(airLine.lastIndexOf('i'))

console.log(airLine.slice(4))
console.log(airLine.indexOf('India'))
console.log(airLine.slice(4,7))

console.log(airLine.slice(airLine.indexOf(' ')+1,airLine.length))
console.log(airLine.slice(-2))



const checkMiddleSeat=function(seat){
    // B and E are middle seat
    const s=seat.slice(-1)
    if(s==='B' || s==='E'){
        console.log("You got the middle seat 😂")
    }else{
        console.log("You are lucky😎")
    }
}

checkMiddleSeat('11B')
checkMiddleSeat('11E')
checkMiddleSeat('11C')