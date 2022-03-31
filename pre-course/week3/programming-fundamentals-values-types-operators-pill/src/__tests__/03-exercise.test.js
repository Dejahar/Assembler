import variableTypes from "../03-exercise";

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

test("exercise 3: create variables of different types", () => {
  expect(() => {
    variableTypes();
  }).not.toThrow();

  expect(variableTypes().textVar).toEqual(expect.any(String));
  expect(variableTypes().numberVar).toEqual(expect.any(Number));
  expect(variableTypes().trueBoolean).toBe(true);
  expect(variableTypes().falseBoolean).toBe(false);
  expect(variableTypes().floatNumber).toEqual(expect.any(Number));
  expect(isFloat(variableTypes().floatNumber)).toBe(true);
});
