const prashant={
    firstName:"Prashant",
    lastName:"Maurya",
    birthYear:2000,
    currently:"Fresher",
    haveDriverLicense:false,
    //function declaration as a key value pair
    calcAge:function(birthYear){
        return 2023-this.birthYear                    //this keyword used for pointing out birthYear so we have to not pass 
                                                      //parameter during call

    },
    getSummary:function(){
        return `${this.firstName} is ${this.calcAge()} year old and he is ${this.haveDriverLicense ?"Eligible":"Not Eligible"}`
    }
}
// console.log(prashant.calcAge(2001))
// console.log(prashant['calcAge'](1998))
console.log(prashant.calcAge())

//Prashant is 23 Year Old

console.log(`${prashant.firstName} is ${prashant.calcAge()} year old`)
console.log(prashant.getSummary())