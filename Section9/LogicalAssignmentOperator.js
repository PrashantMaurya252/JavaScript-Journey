const  details1={
    firstName:"Prashant",
    middleName:"Maurya"
}
const details2={
    firstName:"Shantanu",
    lastName:"Bhaskar"
}

details1.middleName=details1.middleName || 10
details2.middleName=details2.middleName || 10
console.log(details1)
console.log(details2)

//assigning new value
details2.lastName &&='<ANONYMOUS>';
details1.lastName &&='<ANONYMOUS>';
console.log(details1)
console.log(details2)

//nullish assignment operator
details1.middleName ??=10;
details2.middleName ??=10;
console.log(details1)
console.log(details2)
