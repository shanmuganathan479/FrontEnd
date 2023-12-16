import { render, fireEvent, cleanup } from "@testing-library/react";
import Counter from "./Counter";

afterEach(cleanup);
describe(Counter, () => {
  it("Header check", () => {
    const { getByTestId } = render(<Counter />);
    const headerTest = getByTestId("header").textContent;
    expect(headerTest).toBe("Counter");
  });
  it("Intial value check", () => {
    const { getByTestId } = render(<Counter />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toBe(0);
  });

  it("Increment button check", () => {
    const { getByTestId, getByRole } = render(<Counter />);
    const IncrementButton = getByRole("button", { name: "Increment" });
    fireEvent.click(IncrementButton);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toBe(1);
  });

  it("Decrement button check", () => {
    const { getByTestId, getByRole } = render(<Counter />);
    const DecrementButton = getByRole("button", { name: "Decrement" });
    fireEvent.click(DecrementButton);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toBe(-1);
  });

  it("Reset button check", () => {
    const { getByTestId, getByRole } = render(<Counter />);
    const ResetButton = getByRole("button", { name: "Reset" });
    fireEvent.click(ResetButton);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toBe(0);
  });
});
