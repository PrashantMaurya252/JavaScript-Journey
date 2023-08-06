// IIFE-Immediatly Invoked Function Expression

(function(){
    console.log("this function run once");
})();

//arrow function 
(() => console.log('never run again') )();