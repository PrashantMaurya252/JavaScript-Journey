let myDetails={
    name:["Prashant","Maurya"],
    subjects:["Physics","Chemistry","Math"],
    skills:["HTML","CSS","JavaScript"],
    durations:{
        tenth:{
            year:2015,
            percent:84
        },
        twelth:{
            year:2017,
            percent:77.8
        },
        Engineering:{
            year:"2018-2022",
            percent:80
        }
    } ,

    choose:function(firstElement,secondElement){
        return [this.subjects[firstElement],this.skills[secondElement]]
    },
    aboutMe:function(){
        console.log(`${this.name[0]} ${this.name[1]} learned ${this.skills} and completed B.tech in year ${durations.Engineering.year}`)
    },

    aboutMe1:function({name1,skill}){
        console.log(`I am ${name1} and I learned  ${skill}`)
    },
    orderPasta:function(ing1,ing2,ing3){
        console.log(`Here is your Pasta with ${ing1}, ${ing2} and ${ing3}`)
    }
}
const arr=[7,8,9]

// Spread Operator
const newArray=[1,2,3,...arr]
console.log(newArray)

// when we need arrayElements individually
console.log(...newArray)

// adding a new Element in array
const newSkill=[...myDetails.skills,"Java"]
console.log(newSkill)

// shallow copy of Array
const copyArray=[...myDetails.subjects]
console.log(copyArray)

//Join 2 arrays
const jointArray=[...myDetails.skills,...myDetails.subjects]
console.log(jointArray)

//iterables are arrays ,String,maps,sets but not objects
const str="Prashant"
const letters=[...str,' ','M']
console.log(letters)
console.log(...str)

// const ingrediants=[prompt("Let's Make a Pasta Ingreadiant 1?"),
// prompt("Let's Make a Pasta Ingreadiant 2?"),
// prompt("Let's Make a Pasta Ingreadiant 3?")]
// console.log(ingrediants)
// myDetails.orderPasta("a","b","c")
// myDetails.orderPasta(ingrediants[0],ingrediants[1],ingrediants[2])
// myDetails.orderPasta(...ingrediants)

const newRestaurent={foundedIn:1998,...myDetails,founder:'Prashant'}
console.log(newRestaurent)


//copy Object
const copyDetails={...myDetails}
console.log(copyDetails)
