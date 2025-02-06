function sumBy(arr){
let sum = 0 
// const singleElement = arr[0].n
// console.log(singleElement, " >>> single element")
//const initalValue = 0

//  const sum = arr.reduce((acc, currentValue) => acc + currentValue, initalValue)

for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'){
        sum += arr[i]
    }
    else if(typeof arr[i] === 'object' && arr[i] !== null){
        sum += arr[i].n
    }
}

  console.log(sum)

return arr.length > 0 ? sum : 0

}

module.exports = sumBy;