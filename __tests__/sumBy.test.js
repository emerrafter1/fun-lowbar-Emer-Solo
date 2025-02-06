const sumBy = require('../tasks/sumBy')

describe("",() => {

    test("Return a number",() => {
        const input = []
        const expected = 'number'
        const callBack = (x) => {
            
            if(typeof x === 'number'){
                    return sum 
                }
            } 

        const actual = sumBy(input, callBack)
        expect(typeof actual).toBe(expected)
    })

    test("Function returns a sum for a single element from a given array", () => {
        const input = [1]
        const expected = 1
        const mockCallback = jest.fn((x) => {
            
            if(typeof x === 'number'){
                    return x
                }
            
            } )

        const actual = sumBy(input, mockCallback)
        expect(actual).toBe(expected)

    })

    test("Callback function is invoked once for a single element from a given array", () => {
        const input = [1]
        const callback = jest.fn();

        // act
        sumBy(input, callback);

        // assert
        expect(callback.mock.calls.length).toBe(1);
       
    })

    test("Callback function is invoked once for a each element from a given array", () => {
        const input = [1,2,3,4,5]
        const callback = jest.fn();
        // act
        sumBy(input, callback);

        // assert
        expect(callback.mock.calls.length).toBe(5);

    })

    test.only("Function returns a sum for a multiple elements from a given array", () => {
        const input = [1,2,3]
        const expected = 6
        const callback = (x) => {
            if(typeof x === 'number'){
                    return x
                }
            } 
        const actual = sumBy(input, callback)

        expect(actual).toBe(expected)
    })

        test("Function returns a sum for a single element from a given array where the element is an object", () => {
        const input = [{ 'n': 4 }]
        const expected = 4
        const callBack = (x) => {
                if(typeof x === 'number'){
                    return x
            }
            else if(typeof x === 'object' && x!== null){
                return x.n
            }

         }

        const actual = sumBy(input, callBack)

        expect(actual).toBe(expected)

    })





    // test("Function returns a value of type number", () => {
    //     const input = [1]
    //     const expected = 'number'

    //     const actual = sumBy(input)

    //     expect(typeof actual).toBe(expected)
    // })

    // test("Function returns a zero for an empty array", () => {
    //     const input = []
    //     const expected = 0

    //     const actual = sumBy(input)

    //     expect(actual).toBe(expected)
    // })

    // test("Function returns a sum for a single element from a given array", () => {
    //     const input = [1]
    //     const expected = 1

    //     const actual = sumBy(input)

    //     expect(actual).toBe(expected)
    // })

    // test.only("Function returns a sum for a multiple elements from a given array", () => {
    //     const input = [1,2,3]
    //     const expected = 6

    //     const actual = sumBy(input)

    //     expect(actual).toBe(expected)
    // })

    // test("Function returns a sum for a single element from a given array where the element is an object", () => {
    //     const input = [{ 'n': 4 }]
    //     const expected = 4

    //     const actual = sumBy(input)

    //     expect(actual).toBe(expected)

    // })

    // test("Function returns a sum for a multiple element from a given array where the element is an object and all entries have the same key", () => {
    //     const input = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
    //     const expected = 20

    //     const actual = sumBy(input)

    //     expect(actual).toBe(expected)

    // })


    // test.todo("Function returns a sum for a multiple element from a given array where the element is an object and entries are made up of different keys")

    // AFTERNOON add in callback functions




  





})