function cutFruits(fruits){
    return fruits*4
}

function fruitProcessor(apples,oranges){
    const applesPieces=cutFruits(apples)
    const orangesPieces=cutFruits(oranges)
    const juice=`Apples have ${applesPieces} Pieces and oranges have ${orangesPieces} Pieces`
    return juice;
}

console.log(fruitProcessor(2,3))