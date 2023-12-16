import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import DelayCounter from "./DelayCounter";

// afterEach(cleanup);
it("Button delay check", async () => {
  const { getByTestId, getByRole } = render(<DelayCounter />);
  const buttonClicked = getByRole("button", { name: "Increment slowly" });
  fireEvent.click(buttonClicked);
  await waitFor(() => {
    const countValue = Number(getByTestId("output").textContent);
    expect(countValue).toBe(1);
  });
});
