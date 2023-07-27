const Prashant=["Prashant","Maurya",2023-2000,true,["Shantanu","Sauhard","Pawan"]]

let types=[]

for(let i=0;i<Prashant.length;i++){

    //reading from Prashant array
    console.log(Prashant[i],typeof Prashant[i])

    // filling types 
    // first method
    //types[i]=typeof Prashant[i]

    // second method
    types.push(typeof Prashant[i])
}

console.log(types)


const years=[1991,1969,2000,2005,2023,2030]
let ages=[]
for(let i=0;i<years.length;i++){
    ages.push(2037-years[i])
}

console.log(ages)

//continue Keyword

for(let i=0;i<Prashant.length;i++){
    if(typeof Prashant[i] !=='string'){
        continue;
    }
    console.log(Prashant[i], typeof Prashant[i])
}

//break KeyWord

for(let i=0;i<Prashant.length;i++){
    if(typeof Prashant[i]==='object') break;
    console.log(Prashant[i])
}

