const rest=new Map()
rest.set('name',"Prashant Maurya")
rest.set(1,"JavaScript Java")
rest.set(2,"HTML CSS")
rest.set(true,"We are Open")
rest.set(false,"We are closed")
rest.set('open',11)
rest.set('close',23)

console.log(rest.get('name'))
console.log(rest.get(true))

const time=8
console.log(rest.get(time<rest.get('close')&&rest.get('close')<time))

//for deleting elements
rest.delete(2)
console.log(rest)
console.log(rest.has(1))

//Object as Keys
const arr=[1,2]
rest.set(arr,'Test')
console.log(rest.get(arr))