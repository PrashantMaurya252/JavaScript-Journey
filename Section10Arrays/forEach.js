const movements=[200,300,-400,3000,-650,-130,70,1300];
for(const [i,movement] of movements.entries()){
    if(movement>0){
        console.log(`you deposited ${i} :${movement} in bank`)
    }else{
        console.log(`you withdraw ${i} :${Math.abs(movement)} from bank`)
    }
}


console.log('---------------FOREACH------------------')
movements.forEach(function(movement,i,arr){
    if(i>0){
        console.log(`you deposite ${i} :${movement} in bank`)
    }else{
        console.log(`you withdraw ${i} :${movement} in bank`)
    }
})