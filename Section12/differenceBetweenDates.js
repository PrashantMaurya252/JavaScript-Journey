const calcDaysPassed=(date1,date2)=>Math.abs(date2-date1)/(1000*60*60*24);

const days1=calcDaysPassed(new Date(2037,3,13),new Date(2037,3,3));
console.log(days1);