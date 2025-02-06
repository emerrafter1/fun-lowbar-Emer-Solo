// function sumBy(arr, callBack){
// let sum = 0 

// // for(let i = 0; i < arr.length; i++){
// //     if(typeof arr[i] === 'number'){
// //         sum += arr[i]
// //     }
// //     else if(typeof arr[i] === 'object' && arr[i] !== null){
// //         sum += arr[i].n
// //     }
// // }

// for (const element of arr){
//     callBack(element)
//     console.log(sum)
// }

// //return arr.length > 0 ? sum : 0
// return 0

// }


function sumBy(arr, callBack){
    let sum = 0 

    for (const element of arr){
        sum += callBack(element)
    }

    return arr.length > 0 ? sum : 0

}




module.exports = sumBy;