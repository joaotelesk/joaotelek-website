// Components
import { Heading } from "./Heading";

// Utilities
import { render, screen } from "@testing-library/react";

describe("<Heading/>", () => {
  it("renders an tag", async () => {
    render(<Heading>Test Heading</Heading>);
    const h2Element = screen.getByText("Test Heading");
    expect(h2Element).toBeInTheDocument();
  });
});
