import weekDays from "../12-exercise";

test("exercise 12: save in the array 'days' the days of the week", () => {
  expect(weekDays()).toMatchObject([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]);
});
