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
// console.log(myDetails.durations.you.open)       ->this will show error because you does not exist
console.log(myDetails.durations.you?.open)          // -> this remove error and return undefined
console.log(myDetails.durations.twelth?.open)

const days=["Mon","Tue","Wed","Thu","Fri","sat","Sun"]
for(const day of days){
    console.log(day);
    const open=myDetails.durations[day]?.open || "Not Done";
    console.log(`on ${day}  ${open}`);
}

//methods

console.log(myDetails.orderPasta?.("tomatos","chilly","cheese")?? "does not exist")  // this show result
console.log(myDetails.orderBurger?.("tomatos","chilly","cheese")?? "does not exist")  //this show does not exist


//Arrays
const user1=[]
const users=[{name:"Prashant",gmail:"helloworld@gmail.com"}]
console.log(users[0]?.name??'Array Empty')
console.log(user1[0]?.name??'Array Empty')