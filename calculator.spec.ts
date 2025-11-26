import { Calculator } from "./calculator";

describe("calculator", () => {
  it("should return add two numbers", () => {
    const calculator = new Calculator();

    const result = calculator.add(1, 2);

    expect(result).toBe(3);
  });

  it("should subtract two numbers", () => {
    const calculator = new Calculator();
    
    const result = calculator.subtract(1, 2);

    expect(result).toBe(-1);
  });
});
