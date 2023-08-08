//Maps

const currencies=new Map([
    ['USD','US-Dollor'],
    ['EUR','Euro'],
    ['GBR','Pound-Sterling'],
]);

currencies.forEach(function(value,key,arr){
    console.log(`${key} :${value}`)
})


//Sets
const currenciesUnique=new Set(['USD','EUR','GBR','USD','EUR','GBR'])
currenciesUnique.forEach(function(value,_,map){         //in sets there are no keys
    console.log(`${value}`)
})