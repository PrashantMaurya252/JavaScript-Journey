const greet=function(greetings){
    return function(name){
        console.log(`${greetings} ${name}`)
    }
}
const greetHey=greet('Hey')
greetHey('Prashant')

greet('Hello')('Prashant Maurya')

const greetArr=greetings1=>name1=>console.log(`${greetings1}${name1}`)

greetArr('Hola ')('Prashant')