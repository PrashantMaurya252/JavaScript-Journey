const transactions=[34,89,145,220,56,97];

//accumulator->snowball
const total=transactions.reduce((acc,curr,i,arr)=>{
    console.log(`iteration ${i} : ${acc}`)
    return acc+curr;
},0);   //0 is acc initial value

console.log(total)

// using for loop
let balance=0;
for(const mov of transactions)  balance+=mov;
console.log(balance);