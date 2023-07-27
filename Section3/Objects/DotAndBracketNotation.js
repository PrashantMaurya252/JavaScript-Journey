const prashant={
    firstName:"Prashant",
    lastName:"Maurya",
    age:2023-2000,
    currently:"Fresher"
}
//dot notation
console.log(prashant.firstName)

//bracket notation
console.log(prashant['firstName'])

const name='Name'
console.log(prashant['first'+name])

// const intertestedIn=prompt('You can write your interest here')
// console.log(prashant[intertestedIn])

//adding element in Object

prashant.location="India"
prashant['learning']="WebDevelopment"
console.log(prashant)

prashant.friends=["Shantanu","Sauhard","Pawan"]

//challenge
//you have to write "Prashant has 3 friends ,but Shantanu is his best Friend" 
console.log(`${prashant.firstName} has ${prashant.friends.length} friends, but ${prashant.friends[0]} is his best Friend`)
