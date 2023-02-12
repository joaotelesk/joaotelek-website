// Components
import { InputArea } from "./InputArea";

// Utilities
import { fireEvent, render, screen } from "@testing-library/react";

describe("<InputArea/>", () => {
  test("render the component", async () => {
    const onChange = jest.fn();
    const value = "Initial value";
    render(
      <InputArea onChange={onChange} value={value} placeholder="Mensagem" />
    );

    const input = await screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(value);

    fireEvent.change(input, { target: { value: "Test value" } });
    expect(onChange).toHaveBeenCalled();
  });
});
