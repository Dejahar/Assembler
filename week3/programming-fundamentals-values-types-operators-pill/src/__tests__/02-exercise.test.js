import makeNumber from "../02-exercise";

test("exercise 2: create a variable named 'myNumber' that stores a number", () => {
  expect(() => {
    makeNumber();
  }).not.toThrow();

  expect(makeNumber()).toEqual(expect.any(Number));
});
