// Components
import { CardImg } from "./CardImg";

// Utilities
import { render, screen } from "@testing-library/react";

describe("<CardImg/>", () => {
  it("renders a component with image and title", async () => {
    render(<CardImg alt="imagem link" src="/" title="imagem exemplo" />);

    const AltElement = await screen.getByAltText("imagem link");
    expect(AltElement).toBeInTheDocument();
    const TitleElement = await screen.getByText("imagem exemplo");
    expect(TitleElement).toBeInTheDocument();
  });
});
