const movements=[870,1100,-100,-600,500,-300,200,-99];
const deposits=movements.filter(function(mov){
    return mov>0
})
console.log(deposits)

//using for loop

const deposit2=[];
for(const mov of movements){
    if(mov>0){
        deposit2.push(mov);
    }
}
console.log(deposit2)

const withdrawl=movements.filter(mov=>mov<0)
console.log(withdrawl)