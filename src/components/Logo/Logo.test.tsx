// Components
import { Logo } from "./Logo";

// Utilities
import { render, screen } from "@testing-library/react";

describe("<Logo/>", () => {
  it("renders the Logo correctly", () => {
    const { container } = render(<Logo size={34} />);
    // Verifica se todos os elementos de Logo foram renderizada
    const divLogo = container.querySelector("div");
    expect(divLogo).toBeInTheDocument();

    const altLogo = screen.getByAltText("Logo do site");
    expect(altLogo).toBeInTheDocument();

    const textLogo = screen.getByText("João Teles");
    expect(textLogo).toBeInTheDocument();
  });
});
