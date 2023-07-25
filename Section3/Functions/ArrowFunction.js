'use strict';
const calcAge=(birthYear)=>2037-birthYear

console.log(calcAge(1991))

//--------------------------------------------------------------

const calcAge2=(BirthYear)=>{
    const age=2037-BirthYear
    const retirementYear=65-age
    return retirementYear;
}

console.log(calcAge2(1991))