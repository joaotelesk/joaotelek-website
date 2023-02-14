import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

jest.mock("next/router", () => ({
  useRouter: () => ({
    asPath: "/",
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn(),
  }),
}));

describe("<Header/>", () => {
  it("should render Header correctly", () => {
    render(<Header />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });
});
