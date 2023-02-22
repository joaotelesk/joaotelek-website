// Components
import { Button } from "./Button";

// Utilities
import { render, screen, fireEvent } from "@testing-library/react";
import { BsFileEarmarkArrowDown } from "react-icons/bs";

describe("<Button/>", () => {
  it("shoud in the document", async () => {
    render(<Button />);

    const button = await screen.findByRole("button");

    expect(button).toBeInTheDocument();
  });
  it("it is shound a component with link inside", async () => {
    const { container } = render(<Button icon={BsFileEarmarkArrowDown} />);
    const link = container.querySelector("svg");
    expect(link).toBeInTheDocument();
  });
  it("gets function and the executed", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>conteudo</Button>);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
