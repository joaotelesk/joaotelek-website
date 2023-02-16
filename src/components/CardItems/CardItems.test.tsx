// Components
import { CardItems } from "./CardItems";

// Utilities
import { render, screen } from "@testing-library/react";

describe("<CardItems/>", () => {
  it("renders the form correctly", () => {
    const { container } = render(<CardItems slug="" title="" urlSite=""/>);

    // Verifica se a div de CardItems foi renderizada
    const divContainer = container.querySelector("div");
    expect(divContainer).toBeInTheDocument();

    // Verifica se os Elemento de CardItems foram rederizados
    const title = screen.getByText("Titulo");
    expect(title).toBeInTheDocument();
    const linkGitGub = screen.getByAltText("logo github");
    expect(linkGitGub).toBeInTheDocument();
    const linkLogoFigma = screen.getByAltText("logo figma");
    expect(linkLogoFigma).toBeInTheDocument();
    const linkLogoGoogle = screen.getByAltText("logo google");
    expect(linkLogoGoogle).toBeInTheDocument();
  });
});
