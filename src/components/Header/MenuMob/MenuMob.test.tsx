// Components
import { MenuMob } from "./MenuMob";

// Utilities
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

describe("<MenuMob/>", () => {
  it("renders the MenuMob correctly", () => {
    const closeMock = jest.fn();
    render(<MenuMob close={closeMock} />);
    const heading = screen.getByRole("heading", { name: "Menu" });
    const contatoButton = screen.getByRole("button", {
      name: "button de entrar na pagina de contato",
    });
    const linkedinButton = screen.getByRole("link", { name: "logo linkedin" });
    const githubButton = screen.getByRole("link", { name: "logo github" });
    const whatsappButton = screen.getByRole("link", { name: "logo whatsapp" });
    const discordButton = screen.getByRole("link", { name: "logo discord" });
    expect(heading).toBeInTheDocument();
    expect(contatoButton).toBeInTheDocument();
    expect(linkedinButton).toBeInTheDocument();
    expect(githubButton).toBeInTheDocument();
    expect(whatsappButton).toBeInTheDocument();
    expect(discordButton).toBeInTheDocument();
  });
});
