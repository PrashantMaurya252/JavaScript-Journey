let f;
const g=function(){
    const a=23;
    f=function(){
        console.log(a*2)
    }
}

const h=function(){
    const b=777;
    f=function(){
        console.log(b*2);
    }
}

g();
f();
h();
f();
console.dir(f)   // you can see in browser inspect


//example-2

const boardPassenger=function(n,wait){
    const perGroup=n/3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`there are ${perGroup} passengers in each group`);
    },wait*1000)
    console.log(`we start boarding in ${wait} seconds`);
}

boardPassenger(180,3);