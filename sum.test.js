const fetchTodos = require('./async');
const sum = require('./sum');
const axios = require('axios');

// describe('some tests', () => {
//   it('Sum', () => {
//     const result = sum(2, 4);
//     expect(result).toBe(6);
//   });
//   it('Object Checking', () => {
//     const result = {};
//     expect(result).toEqual({});
//   });
// });

//  now writing test t0 check truthy or falsy values;

// describe('truthy or falsy', () => {
//   it('checks', () => {
//     const n = null;
//     expect(n).toBeFalsy();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeNull();
//     expect(n).not.toBeUndefined();
//   });
// });

// now writimg test for numbers
// describe('numbers', () => {
//   it('numbers', () => {
//     const result = 3 + 5;
//     // expect(result).toBeGreaterThan(3);
//     // expect(result).toBeGreaterThanOrEqual(8);
//     expect(result).toBeLessThan(9);
//     expect(result).toBeLessThanOrEqual(8);
//   });
//   it('floats', () => {
//     const value = 0.1 + 0.2;
//     //expect(value).toBe(0.3);           This won't work because of rounding error
//     expect(value).toBeCloseTo(0.3); // This works.
//   });
// });

// now writing test for strings

// describe('strings', () => {
//   it('strings', () => {
//     expect('team').toMatch(/m/);
//   });
// });

//>>>>>>>>>>>> now writing test for arrays
// const shoppingList = [
//     'diapers',
//     'kleenex',
//     'trash bags',
//     'paper towels',
//     'milk',
//   ];

//   test('the shopping list has milk on it', () => {
//     // expect(shoppingList).toContain('milk');
//     // expect(new Set(shoppingList)).toContain('milk');
//   });

// >>>>>  now writing test for functions that throws an error;

// function errorThrow() {
//   throw new Error('Something went wrong');
// }

// describe('error', () => {
//   it('error', () => {
//     expect(() => errorThrow()).toThrow();
//     expect(() => errorThrow()).toThrow(Error);
//     expect(() => errorThrow()).toThrow('Something went wrong');
//   });
// });

// now dealing with the async code

// it('test async', async () => {
//   const todo = await fetchTodos(1);
//   expect(todo.id).toBe(1);
// });

// //  >>>>>>>>>> Setup and Teardown
// let animals = ['Zebra', 'Lion'];

// beforeEach(() => {
//   animals = ['Zebra', 'Lion'];
// });

// // we have other as well like afterEach , beforeAll and afterAll

// describe('test array', () => {
//   animals.push('Bhalo');
//   it('a', () => {
//     expect(animals[animals.length - 1]).toBe('Bhalo');
//   });

//   animals.unshift('Rabbit');
//   it('a', () => {
//     expect(animals[0]).toBe('Rabbit');
//   });

//   it.only('a', () => {
//     expect(animals.length).toBe(2);
//   });
// });

// mock functions

// const forEach = (items, cb) => {
//   for (let i = 0; i < items.length; i++) {
//     cb(items[i]);
//   }
// };

// it('mock', () => {
//   const mockFunction = jest.fn((x) => 42 + x);
//   forEach([0, 1], mockFunction);

//   expect(mockFunction.mock.calls.length).toBe(2);
//   expect(mockFunction.mock.calls[0][0]).toBe(0);
//   expect(mockFunction.mock.results[0].value).toBe(42);
// });

// mock itself return value
// it('mock return ', () => {
//   const mockFunction = jest.fn();
//   mockFunction.mockReturnValueOnce(true).mockReturnValueOnce(4);

//   expect(mockFunction()).toBe(true);
//   expect(mockFunction()).toBe(4);
// });

// const fetchTodos = async (id) => {
//   const { data } = await axios(
//     `https://jsonplaceholder.typicode.com/todos/${id}`
//   );

//   return data;
// };

it('mock axios', async () => {
  jest.spyOn(axios, 'get').mockReturnValueOnce({
    data: {
      id: 1,
      title: 'hii',
    },
  });
  const results = await fetchTodos(1);

  expect(results.title).toBe('hii');
});
