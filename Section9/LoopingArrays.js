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

const menu=[...myDetails.subjects,...myDetails.skills]
for( const item of menu) console.log(item)
for(const item of menu.entries()) console.log(item)
console.log(...menu.entries())

for(const [i,el] of menu.entries()){
    console.log(`${i +1}:${el}`)
}