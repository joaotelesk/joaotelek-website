// Components
import { Input } from "./Input";

// Utilities
import { render, fireEvent } from "@testing-library/react";

describe("<Input/>", () => {
  it("sender the component", () => {
    const onChangeMock = jest.fn();
    const value = "Initial value";
    const { getByPlaceholderText } = render(
      <Input placeholder="Test input" value={value} onChange={onChangeMock} />
    );
    const input = getByPlaceholderText("Test input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(value);

    fireEvent.change(input, { target: { value: "Test value" } });
    expect(onChangeMock).toHaveBeenCalled();
  });
});
