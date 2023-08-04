//set contain unique elements
const fruitsSet=new Set(["Apple","Orange","Banana","Apple","Orange","Banana"])
console.log(fruitsSet) //Apple Banana Orange

console.log(new Set('Jonas'))// 'J','o'...
console.log(fruitsSet.size)   //3
console.log(fruitsSet.has('Guavava'))  //false
console.log(fruitsSet.has("Apple"))    // true

// for adding elements
fruitsSet.add("Chilly")
console.log(fruitsSet)

//for deleting elements
fruitsSet.delete("Apple")
console.log(fruitsSet)


//Example
const staff=['Waiter','Chef','Waiter','Manager','Chef','Waiter']

const staffUnique=[...new Set(staff)]

console.log(staffUnique)