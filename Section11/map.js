const movements=[200,101,45,89,57];
const convertTo=movements.map(function(mov){
    return mov*1.1;
});
console.log(convertTo);


//Arrow function
const currency=[33,99,-55,22,66,-77];
const convert=currency.map(mov=>mov*3);
console.log(convert)


const Description=currency.map((mov,i,arr)=>{
    if(mov>0){
        return `${i+1} : amount ${mov} deposited in your account `;
    }else{
        return `${i+1} : amount ${Math.abs(mov)} withdrawl from your account`;
    }
});

console.log(Description)

const name="Prashant Maurya";
const letter= name.split(' ').map(mov=>mov[0]).join('')
console.log(letter)
