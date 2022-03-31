import makeNullUndefinedVariables from "../04-exercise";

test("exercise 4: create null and undefined variables", () => {
  expect(() => {
    makeNullUndefinedVariables();
  }).not.toThrow();

  expect(makeNullUndefinedVariables().nullVar).toBeNull();
  expect(makeNullUndefinedVariables().undefinedVar).toBeUndefined();
});
