//requiring the uniqueItems.js function
const { totalGoals } = require("./totalGoals");

describe("totalGoals", () => {
  it("should return a number of goals of 48 when given the team everton", () => {
    const team = "everton";
    const expected = 48;
    const result = totalGoals(team);
    expect(result).toEqual(expected);
  });
  it("should return a number of goals of 31 when given the team astonvilla", () => {
    const team = "astonvilla";
    const expected = 31;
    const result = totalGoals(team);
    expect(result).toEqual(expected);
  });

  it("should return a 'No valid team name' when given an empty string", () => {
    const team = "";
    const expected = "No valid team name";
    const result = totalGoals(team);
    expect(result).toEqual(expected);
  });
});
