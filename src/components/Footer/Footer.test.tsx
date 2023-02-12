// Components
import { Footer } from "./Footer";

// Utilities
import { render } from "@testing-library/react";

describe("<Footer/>", () => {
  it("renders the footer correctly", () => {
    const { container } = render(<Footer />);
    // Verifica se a tag footer foi renderizada
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});
