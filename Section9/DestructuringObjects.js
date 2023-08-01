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
    }
}

const{name,subjects,durations,skills}=myDetails                 //exact property name from the object
console.log(name,subjects,skills,durations)

//assigning new variable name
const {name:newName,subjects:newSubjects,durations:newDurations,skills:newSkills}=myDetails
console.log(newDurations,newName,newSkills,newSubjects)


//setting default values
const { menu=[],name:name1=[],subjects:subject1=[]}=myDetails
console.log(menu,name1,subject1)

//mutating variables
let a=110;
let b=200;
const obj={a:20,b:4,c:89};
({a,b}=obj);
console.log(a,b);

//nested objects

const{tenth}=durations
console.log(tenth)

const {twelth:{year,percent}}=durations
console.log(year,percent)

const{Engineering:{year:y,percent:p}}=durations
console.log(y,p)

//method call
myDetails.aboutMe()

//method manipulation
myDetails.aboutMe1({
    name1:"Kumar",
    skill:"Java",
    
})
