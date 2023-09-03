console.log(Math.sqrt(25));
console.log(Math.min(5,18,23,11,2));
console.log(Math.max(5,18,23,11,2));
console.log(Math.random()*6);
console.log(Math.trunc(Math.random()*6)+1);

const randomInt=(min,max)=>Math.trunc(Math.random()*(max-min)+1)+min;
console.log(randomInt(10,20));


// Rounding Integers

console.log(Math.trunc(23.9)); //23
console.log(Math.trunc(23.1)); //23
console.log(Math.ceil(23.9));  //24
console.log(Math.ceil(23.1));  //24
console.log(Math.floor(23.9)); //23
console.log(Math.floor(23.1)); //23 


// Rounding Decimals
 console.log((2.7).toFixed(0));    //3
 console.log((2.7).toFixed(2));    // 2.70
 console.log((2.35).toFixed(3));   // 2.350
 console.log(+(2.35).toFixed(3));  //2.35