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
    },
    orderPizza:function(ingre1,...otheringre){
        console.log(ingre1)
        console.log(otheringre)
    }
}

//spred operator because ... is right side of =
const arr=[1,2,...[3,4]]

//rest operator because ... is left side of =
const [a,b,...other]=[1,2,3,4,5]
console.log(a)
console.log(b)
console.log(other)

//objects
const {Engineering,...qualifications}=myDetails.durations
console.log(qualifications)

//Functions
let sum=0
const add=function(...numbers){
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i]
    }
    console.log(sum)
}
add(2,3)
add(1,2,3,4,5)
add(1,2,3,4,5,6,7,8,9)

const x=[22,33,11]
add(...x)

myDetails.orderPizza("cheese","onions","tomatos","olives")
myDetails.orderPizza("cheese")