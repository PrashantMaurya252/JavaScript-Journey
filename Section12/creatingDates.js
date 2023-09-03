const now=new Date();
console.log(now);

console.log(new Date('Aug 30 2023 10:15'));

console.log(new Date(2023,10,19,15,23,5));

console.log(new Date(0));
console.log(new Date(3*24*60*60*1000));  // 3 day after

const future=new Date(2033,9,22,10,59);
console.log(future.toISOString());