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

// properties names
const properties=Object.keys(myDetails.durations)
console.log(properties)
let openStr=`I completed my ${properties.length} study `
for(const study of properties){
    openStr+=`${study},`

}
console.log(openStr)

// Entire Object
const entries=Object.entries(myDetails.durations)
console.log(entries)

for(const entr of entries){
    console.log(entr)
}

// key values
for(const [ent,{year,percent}] of entries){
    console.log(`${ent}  completed during ${year} and passed by ${percent} %`)

}