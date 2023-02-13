import IptrackerApp from "../../src/components/IptrackerApp";

describe("Test at Iptracker", () => {
  test("localIp has to return a string", () => {
    getIp();
    expect(localIp).toBe(String);
  });
});
