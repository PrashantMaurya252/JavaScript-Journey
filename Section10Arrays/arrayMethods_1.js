const currencies=new Map([
    ['USD','US-Dollor'],
    ['EUR','Euro'],
    ['GBR','Pound-Sterling'],
]);

const movement=[200,300,-400,3000,-650,-130,70,1300];

let arr=['a','b','c','d','e']

// slice Method-> it can't mutate the array
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice());

//SPLICE->it mutate the array
//console.log(arr.splice(2))
console.log(arr.splice(2,3))
console.log(arr)

//Reverse->it also mutate the array

let arr2=['e','d','c','b','a'];
console.log(arr2.reverse());
console.log(arr2);

//concat

const letter=arr.concat(arr2);
console.log(letter);
console.log([...arr,...arr2])

//JOIN

console.log(letter.join('-'))

//At method

console.log(arr2[0])//'a'
console.log(arr2.at(0))  //'a'

//last element
console.log(arr2[arr2.length-1]) // 'e'
console.log(arr2.slice(-1)[0])   // 'e'
console.log(arr2.at(-1))         // 'e'