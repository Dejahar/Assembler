import compareValues from "../06-exercise";

test("exercise 6: save the value 'error' in the variable 'result' when x and y are undefined", () => {
  expect(compareValues()).toMatch(/error/i);
});

test("exercise 6: save the value 'smaller' in the variable 'result' when x is smaller than y", () => {
  expect(compareValues(1, 5)).toMatch(/smaller/i);
});

test("exercise 6: save the value 'larger' in the variable 'result' when x is larger than y", () => {
  expect(compareValues(5, 1)).toMatch(/larger/i);
});

test("exercise 6: save the value 'equal' in the variable 'result' when x is equal to y", () => {
  expect(compareValues(5, 5)).toMatch(/equal/i);
});
