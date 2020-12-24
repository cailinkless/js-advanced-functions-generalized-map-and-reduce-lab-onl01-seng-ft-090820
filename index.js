// Add your functions here

function map(array, callback) {
    let newArray = []
    array.forEach( x => newArray.push(callback(x)) )
    return newArray
}

function reduce(array, callback, result = null) {
    if (result === null) {
        result = array[0]
        array.shift()
    }
    array.forEach( x => {
        result = callback(x, result)  } )
    return result
}

// describe("reduce returns true when all values are true", function() {
//     it("reduces correctly", function(){
//       sourceArray = [1, 2, true, "razmatazz"]
//       expect(reduce(sourceArray, function(a, memo){ return !!a && !!memo})).to.be.true
//     })
//   })

