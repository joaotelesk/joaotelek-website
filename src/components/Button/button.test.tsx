// Components
import Button from "./button";

// Utilities
import { render, screen, fireEvent } from "@testing-library/react";

describe("<Button/>", () => {
  it("shoud in the document", async () => {
    render(<Button />);

    const button = await screen.findByRole("button");

    expect(button).toBeInTheDocument();
  });
  it("it is a component with image with link inside", async () => {
    render(
      <Button asChild>
        <a href="#">
          <img src="/" alt="imagem exemplo" />
        </a>
      </Button>
    );

    const link = await screen.getByAltText("imagem exemplo");
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
