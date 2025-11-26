import { Calculator } from "./calculator";

describe("calculator", () => {
  it("should return 1", () => {
    const calculator = new Calculator();
    
    const result = calculator.add(1, 2);

    expect(result).toBe(3);
  });
});
