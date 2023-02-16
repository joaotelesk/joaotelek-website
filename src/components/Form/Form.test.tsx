// Components
import { Form } from "./Form";

// Utilities
import { render, screen } from "@testing-library/react";

describe("<Form/>", () => {
  it("renders the form correctly", () => {
    const { container } = render(<Form />);
    // Verifica se a tag form foi renderizada
    const form = container.querySelector("form");
    expect(form).toBeInTheDocument();
  });

  it("renders form elements correctly", () => {
    render(<Form />);

    // Verifica se os campos foram renderizados
    const name = screen.getByPlaceholderText("Seu nome");
    expect(name).toBeInTheDocument();
    const email = screen.getByPlaceholderText("Endereço de e-mail");
    expect(email).toBeInTheDocument();
    const subject = screen.getByPlaceholderText("Assunto");
    expect(subject).toBeInTheDocument();
    const message = screen.getByPlaceholderText("Mensagem");
    expect(message).toBeInTheDocument();

    // Verifica se o botão de enviar foi renderizado
    const button = screen.getByRole("button", { name: /Enviar mensagem/i });
    expect(button).toBeInTheDocument();
  });
});
