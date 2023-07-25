function logger(){
    console.log("You Loggged in")
}

// calling a function
logger()

function fruitProcessor(apples,oranges){              // apples and oranges are parameters
    console.log(apples,oranges)
    const Juice=`Juice with ${apples} apples and ${oranges} oranges`        
    return Juice;

}
console.log(fruitProcessor(7,8))                    // here 7 and 8 are arguments