// some ,every ,flat ,flatmap methods

const movements=[450,300,900,750,300,870];
console.log(movements.some(mov=>mov>4950))
console.log(movements.every(mov=>mov>500))

const subarray=[[1,2,3],[4,5,6],7,8];
console.log(subarray.flat())