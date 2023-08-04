// split and join

console.log('Prashant Maurya'.split(' '))
console.log('Prashant+Maurya'.split('+'))

const [firstName,lastName]='Prashant Maurya'.split(' ')
const newName=['Mr',firstName,lastName.toUpperCase()].join('-')
console.log(newName)

const capitalization=function(name){
    const names=name.split(' ')
    const nameUpper=[]
    for(const n of names){
        nameUpper.push(n[0].toUpperCase()+n.slice(1))
    }
    console.log(nameUpper.join(' '))

}
capitalization("prashant maurya")


// Padding

const myName='Prashant'
console.log(myName.padStart(25,'+'))
console.log(myName.padEnd(25,'+'))

const masking=function(number){
    const string1=number+''
    const last=string1.slice(-4)
    return last.padStart(string1.length,'*')

}
console.log(masking(34562319865))
console.log(masking(98234610956734))



//repeat

const message="Bad Weather !  "
console.log(message.repeat(5))