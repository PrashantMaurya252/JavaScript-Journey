const names=["Prashant","Maurya","Kumar","Apporva","Khushi"];
console.log(names.sort());

const movements=[-100,300,800,1100,-1300,2600,500,700,-900,-1100];
console.log(movements.sort());

//Sorting in Ascending Order
movements.sort((a,b)=>{
    if(a>b) return 1;
    if(a<b) return -1;
});
console.log(movements);

// Sorting in Descending order
movements.sort((a,b)=>{
    if(a>b) return -1;
    if(a<b) return 1;
});

console.log(movements);

movements.sort((a,b)=>a-b);         //Ascending Order 
console.log(movements);
movements.sort((a,b)=>b-a);         // Descending Order 
console.log(movements) ;      
