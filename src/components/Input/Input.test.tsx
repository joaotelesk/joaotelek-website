import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input component", () => {
  it("should call onChange function when the input value is changed", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Test input" value="" onChange={onChangeMock} />
    );
    const input = getByPlaceholderText("Test input");
    fireEvent.change(input, { target: { value: "Test value" } });
    expect(onChangeMock).toHaveBeenCalled();
  });
});
