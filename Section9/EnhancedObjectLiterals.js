const Education=['Matric','Intermediate','Graduation']

durations={
    [Education[0]]:{
        year:2015,
        percent:84
    },
    [Education[1]]:{
        year:2017,
        percent:77.8
    },
    [`U_G-${Education[2]}`]:{
        year:"2018-2022",
        percent:80
    }
}
let myDetails={
    name:["Prashant","Maurya"],
    subjects:["Physics","Chemistry","Math"],
    skills:["HTML","CSS","JavaScript"],

    //1-we can create object like this
    durations ,
    
    //2-we can create function without function KeyWord
    choose(firstElement,secondElement){
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
console.log(durations)