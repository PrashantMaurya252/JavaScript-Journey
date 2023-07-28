const temp=[34,77,11,78,45,99,'error',44,7,101]
const minMax=function(temps){
    let max=temps[0]
    let min=temps[0]
    for(let i=0;i<temps.length;i++){
        if(temps[i]>max) max=temps[i]
        else if(temps[i]<min) min=temps[i]
        else if(temps[i]==='error') continue
        
        
    }
    console.log(max)
    console.log(min)
    console.log(`amplitude is ${max-min}`)
}
minMax(temp)