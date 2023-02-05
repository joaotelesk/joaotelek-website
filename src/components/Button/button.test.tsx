import { getByAltText, render, screen } from "@testing-library/react";

import Button from "./button";

describe("<Button/>", () => {
  it("shoud in the document", async () => {
    render(<Button />);

    const button = await screen.findByRole("button");

    expect(button).toBeInTheDocument();
  });
  it("shoud is link", async () => {
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
});
