//use any data types return any data types short circuiting
console.log(3||'jonas')
// if first value is true than (||) does not evaluate second operand it immediatly return first true value
console.log(''||'jonas')  //jonas
console.log(true||'')      //true
console.log(undefined || null) //null
console.log(''|| undefined||null||0||'Hello')  //Hello

const present=20
const guest=present ? 'Welcome':10;
console.log(guest);

const guest1=present || 10
console.log(guest1)


console.log('-----------------AND---------------------')
// if first operand is false than it return falsy value without checking second operand
// if both value is trithy than last value returned
//return first falsy value
console.log(0 && 'jonas') //0
console.log(7 && 'jonas')  //jonas
console.log(7 && 'jonas' && null && 89)  // null


let available=90
if( available=90){
    console.log(available)
}

//using AND
console.log(available && available===90)  //true