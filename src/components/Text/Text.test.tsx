// Components
import { Text } from "./Text";

// Utilities
import { render, screen } from "@testing-library/react";

describe("<Text/>", () => {
  it("renders an tag", async () => {
    render(<Text>Test Text</Text>);
    const spanElement = screen.getByText("Test Text");
    expect(spanElement).toBeInTheDocument();
  });
  it("is shound a coponent with link inside", async () => {
    render(
      <Text asChild>
        <a href="#">Test Text Link</a>
      </Text>
    );

    const link = await screen.getByText("Test Text Link");
    expect(link).toBeInTheDocument();
  });
});
