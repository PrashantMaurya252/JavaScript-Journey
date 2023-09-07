setTimeout(()=>console.log('Pizza has been ordered'),2000);
console.log('...Waiting');

const ingredients=['olives','spinach'];
const pizzaTimer=setTimeout((ing1,ing2)=>console.log(`Pizza with ${ing1} and ${ing2}`),5000,...ingredients);

//how to stop timer
if(ingredients.includes('spinach'))clearTimeout(pizzaTimer);


// set Interval

setInterval(function(){
    const now=new Date();
    console.log(now);

},5000)
