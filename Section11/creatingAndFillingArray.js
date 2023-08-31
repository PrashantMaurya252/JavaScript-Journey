const x=new Array(7);
console.log(x.fill(1,2,6));

const y=Array.from({length:7},()=>1);
console.log(y);

const z=Array.from({length:7},(curr,i)=>i+1);
console.log(z);