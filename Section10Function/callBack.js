const oneWord=function(str){
    return str.replace(/ /g,'').toLowerCase()
}
const upperWord=function(str){
    const [first,...others]=str.split(' ')
    return [first.toUpperCase(),...others].join(' ')
}

//Higher Order Function
const transform=function(str,fn){
    console.log(`Orginal string is ${str}`)
    console.log(`Transformed string is ${fn(str)}`)
    console.log(`name of the function ${fn.name}`)
}
transform("JavaScript is best Programming Language",oneWord)
transform("JavaScript is best Programming Language",upperWord)