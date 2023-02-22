// Components
import { CardItems, CarItemsPros } from "./CardItems";

// Utilities
import { render, screen } from "@testing-library/react";

describe("CardItems", () => {
  const props: CarItemsPros = {
    title: "Test Project",
    urlSite: "https://testsite.com",
    slug: "test-project",
    urlImg: "https://testimage.com",
    urlGithub: "https://testgithub.com",
    urlFigma: "https://testfigma.com",
  };

  it("renders card with title", () => {
    render(<CardItems {...props} />);
    const titleElement = screen.getByText("Test Project");
    expect(titleElement).toBeInTheDocument();
  });
  it("renders card with image", () => {
    render(<CardItems {...props} />);
    const imageElement = screen.getByAltText("Test Project");
    expect(imageElement).toHaveAttribute("src", "https://testimage.com");
  });
});
