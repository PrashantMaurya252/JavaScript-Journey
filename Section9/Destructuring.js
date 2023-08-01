let myDetails={
    name:["Prashant","Maurya"],
    subjects:["Physics","Chemistry","Math"],
    skills:["HTML","CSS","JavaScript"],

    choose:function(firstElement,secondElement){
        return [this.subjects[firstElement],this.skills[secondElement]]
    }
}

const arr=[2,3,4]
const a=arr[0]
const b=arr[1]
const c=arr[2]

const [x,y,z]=arr
console.log(x,y,z)
console.log(arr)

let [primary,secondary,third]=myDetails.subjects
console.log(primary,secondary,third)
let [firstName,lastName]=myDetails.name
console.log(firstName,lastName)

let [skill1,,skill3]=myDetails.skills;
console.log(skill1,skill3);


//switching variable
// const temp=skill1
// skill1=skill3
// skill3=temp
// console.log(skill1,skill3)

//mutating variables
[skill1,skill3]=[skill3,skill1];
console.log("Mutating variables "+skill1,skill3);


//receive two return values from function
const [first,second]=myDetails.choose(1,1)
console.log(myDetails.choose(1,1))
console.log(first,second)

//nested destructuring
const nested=[2,4,[5,6]]
const[i,k,j]=nested
console.log(i,j,k)
const [p,,[q,r]]=nested
console.log(p,q,r)

//default values
const[u=1,v=1,w=1]=[8,9]                   // 1 is default values
console.log(u,v,w)

