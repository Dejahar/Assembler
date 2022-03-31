import {
  learnConsoleLog,
  stringTypeofTest,
  numberTypeofTest,
  boolTypeofTest,
  undefinedTypeofTest,
  nullTypeofTest,
  arrTypeofTest
} from "../05-exercise";

let logSpy;

beforeAll(() => {
  logSpy = jest.spyOn(console, "log").mockImplementation();
});

afterEach(() => {
  console.log.mockReset();
});

afterAll(() => {
  console.log.mockRestore();
});

test("exercise 5: learn how to use console.log", () => {
  learnConsoleLog();

  expect(logSpy).toHaveBeenCalledWith(expect.any(String));

  console.log.mockReset();
  learnConsoleLog();
});

test("exercise 5: use the typeof operator and console.log with a variable containing a string", () => {
  stringTypeofTest();

  expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/string/i));
});

test("exercise 5: use the typeof operator and console.log with a variable containing a number", () => {
  numberTypeofTest();

  expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/number/i));
});

test("exercise 5: use the typeof operator and console.log with a variable containing a boolean", () => {
  boolTypeofTest();

  expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/boolean/i));
});

test("exercise 5: use the typeof operator and console.log with a variable containing undefined", () => {
  undefinedTypeofTest();

  expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/undefined/i));
});

test("exercise 5: use the typeof operator and console.log with a variable containing null", () => {
  nullTypeofTest();

  expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/object/i));
});

test("exercise 5: use the typeof operator and console.log with a variable containing an array", () => {
  arrTypeofTest();

  expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/object/i));
});
