import { render, fireEvent } from "@testing-library/react";
import { InputArea } from "./InputArea";
describe("<InputArea/>", () => {
  test("renders the component", () => {
    const { getByRole } = render(<InputArea value="" />);
    const inputArea = getByRole("textbox");
    expect(inputArea).toBeInTheDocument();
  });
  test("calls onChange function when text is typed", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <InputArea value="" onChange={handleChange} />
    );
    const inputArea = getByRole("textbox");
    fireEvent.change(inputArea, { target: { value: "Test" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
