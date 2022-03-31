import makeVar from "../01-exercise";

test("exercise 1: create a variable with the value 'hello-world'", () => {
  expect(() => {
    makeVar();
  }).not.toThrow();

  expect(makeVar()).toMatch(/hello-world/i);
});
