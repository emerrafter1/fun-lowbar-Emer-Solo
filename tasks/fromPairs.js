function fromPairs(arr){
    let objExample = {};
    
    for(let i = 0; i < arr.length; i++){
        let keyObj = arr[i][0]
        let valueObj = arr[i][1]
        objExample[keyObj] = valueObj
    }

    return objExample;
}

module.exports = fromPairs;