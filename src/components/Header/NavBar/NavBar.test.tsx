import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { Navbar } from "./NavBar";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

interface MockNextRouter {
  asPath: string;
}

describe("Navbar", () => {
  it("renders the correct links", () => {
    const router: MockNextRouter = { asPath: "/paginaTeste" };
    (useRouter as jest.Mock).mockReturnValue(router);

    const { getByText } = render(<Navbar />);
    expect(getByText("Início")).toBeInTheDocument();
    expect(getByText("Serviços")).toBeInTheDocument();
    expect(getByText("Portfólio")).toBeInTheDocument();
    expect(getByText("Skills")).toBeInTheDocument();
  });
});
