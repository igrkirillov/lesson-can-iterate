import canIterate from "../canIterate";

describe('Can iterate module', () => {

  test ('test Map', () => {
    expect(canIterate(new Map())).toBe(true);
  });
  test ('test Set', () => {
    expect(canIterate(new Set())).toBe(true);
  });
  test ('test null', () => {
    expect(canIterate(null)).toBe(false);
  });
  test ('test number', () => {
    expect(canIterate(10)).toBe(false);
  });
  test ('test string', () => {
    expect(canIterate("Netology")).toBe(true);
  });
})