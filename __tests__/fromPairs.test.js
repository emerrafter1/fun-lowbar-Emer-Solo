const fromPairs = require('../tasks/fromPairs')

describe('fromPairs', () => {
    test('returns an empty object from passed empty array', ()=> {
     //arrange
     const input = [[]];
     const expected = {};

     // act
     const actual = fromPairs(input);

     //assert
     expect(actual).toEqual(expected);
    })
    test('Returns an object with key-value from single array', () =>{
 //arrange
 const input = [['a', 1]];
 const expected = {'a' : 1};

 // act
 const actual = fromPairs(input);

 //assert
 expect(actual).toEqual(expected);
    })
    test('Returns an object with key-value pairs  from  array with nested arrays', () =>{
        //arrange
        const input = [['a', 1], ['b', 2], ['c', 3]];
        const expected = {'a' : 1, 'b' : 2, 'c': 3};
       
        // act
        const actual = fromPairs(input);
       
        //assert
        expect(actual).toEqual(expected);
           })
})