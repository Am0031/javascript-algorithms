const { timeLimit, timeLimitRace } = require("./promises");

describe("time limit", () => {
  it("should display the rejected message", async () => {
    const fn = async (n) => {
      await new Promise((res) => setTimeout(res, 100));
      return n * n;
    };
    const inputs = [5];
    const t = 50;
    const expected = { rejected: "Time Limit Exceeded" };
    const limited = timeLimit(fn, t);
    let result;
    try {
      const res = await limited(...inputs);
      result = { resolved: res };
    } catch (err) {
      result = { rejected: err };
    }
    expect(result).toEqual(expected);
  });

  it("should display the resolved result", async () => {
    const fn = async (n) => {
      await new Promise((res) => setTimeout(res, 100));
      return n * n;
    };
    const inputs = [5];
    const t = 150;
    const expected = { resolved: 25 };
    const limited = timeLimit(fn, t);
    let result;
    try {
      const res = await limited(...inputs);
      result = { resolved: res };
    } catch (err) {
      result = { rejected: err };
    }
    expect(result).toEqual(expected);
  });
  it("should display the rejected message", async () => {
    const fn = async (n) => {
      await new Promise((res) => setTimeout(res, 100));
      return n * n;
    };
    const inputs = [5];
    const t = 50;
    const expected = { rejected: "Time Limit Exceeded" };
    const limited = timeLimitRace(fn, t);
    let result;
    try {
      const res = await limited(...inputs);
      result = { resolved: res };
    } catch (err) {
      result = { rejected: err };
    }
    expect(result).toEqual(expected);
  });

  it("should display the resolved result", async () => {
    const fn = async (n) => {
      await new Promise((res) => setTimeout(res, 100));
      return n * n;
    };
    const inputs = [5];
    const t = 150;
    const expected = { resolved: 25 };
    const limited = timeLimitRace(fn, t);
    let result;
    try {
      const res = await limited(...inputs);
      result = { resolved: res };
    } catch (err) {
      result = { rejected: err };
    }
    expect(result).toEqual(expected);
  });
  it("should display the error message", async () => {
    const fn = async () => {
      throw "Error";
    };
    const inputs = [];
    const t = 1000;
    const expected = { rejected: "Error" };
    const limited = timeLimitRace(fn, t);
    let result;
    try {
      const res = await limited(...inputs);
      result = { resolved: res };
    } catch (err) {
      result = { rejected: err };
    }
    expect(result).toEqual(expected);
  });

  it("should display the resolved result", async () => {
    const fn = async (a, b) => {
      await new Promise((res) => setTimeout(res, 120));
      return a + b;
    };
    const inputs = [5, 10];
    const t = 150;
    const expected = { resolved: 15 };
    const limited = timeLimitRace(fn, t);
    let result;
    try {
      const res = await limited(...inputs);
      result = { resolved: res };
    } catch (err) {
      result = { rejected: err };
    }
    expect(result).toEqual(expected);
  });
});
