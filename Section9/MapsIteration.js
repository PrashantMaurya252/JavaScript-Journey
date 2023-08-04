const question=new Map([
    ['question','what is the best Programming Language in the World ?'],
    [1,'C'],
    [2,'Java'],
    [3,'JavaScript'],
    ['correct',3],
    [true,'correct'],
    [false,'try again']
])
console.log(question)

const openingHours={
    mon:{
    open:'10pm',
    close:'12pm'
    },
    tue:{
        open:'10am',
        close:'10pm'
    }
}
//converting object to map
const hours=new Map(Object.entries(openingHours))
console.log(hours)

//iterating maps

console.log(question.get('question'))
for(const [key,value] of question){
    if(typeof key==='number'){
        console.log(`${key}:${value}`)
    }
}

// const answer=Number(prompt('Enter your responce'))
// console.log(answer)
// console.log(question.get(question.get('correct')===answer))

//convert map to array
console.log([...question])