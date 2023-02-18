// Components
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { InputArea } from "../InputArea/InputArea";
import { Text } from "../Text/Text";
import Link from "next/link";

// Utilities
import clsx from "clsx";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp, FaDiscord, FaTelegramPlane } from "react-icons/fa";

// Hooks
import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { useCreateFormMessageMutationMutation } from "../../graphql/generated";
import { Toast } from "../Toast/Toast";

// Interfaces
type FormValue = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export interface FormProps {
  className?: string;
}

// Variables
const initState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Form({ className }: FormProps) {
  const [createFormMessage, { loading }] =
    useCreateFormMessageMutationMutation();
  const [values, setValues] = useState<FormValue>(initState);
  const [toastIsOpen, setToastIsOpen] = useState(false);

  function handleChange(key: keyof FormValue, value: string) {
    setValues({ ...values, [key]: value });
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const response = await createFormMessage({
      variables: {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      },
    });
    if (response) {
      // Exibir mensagem de confirmação
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 5000);
    }
    setValues(initState);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={clsx(
          "w-auto bg-black-200 rounded px-5 py-5 flex flex-col text-center items-center mobile:px-3",
          className
        )}
      >
        <div className="mb-3">
          <Logo size={35} className="font-bold text-sm text-white-500" />
        </div>

        <div className="mb-8 w-4/5 flex justify-center">
          <Text className="text-white-300 font-normal">
            Me diga o que você precisa, o propósito do projeto ou os problemas
            que vou solucionar. Tentarei the responder dentro de 24 horas.
          </Text>
        </div>

        <div className="flex gap-3 desktop:flex-row justify-between mb-3 w-full tablet:flex flex-col  ">
          <Input
            value={values.name}
            onChange={(value) => handleChange("name", value)}
            placeholder="Seu nome"
            required
          />
          <Input
            value={values.email}
            onChange={(value) => handleChange("email", value)}
            placeholder="Endereço de e-mail"
            type="email"
            required
          />
        </div>

        <Input
          value={values.subject}
          onChange={(value) => handleChange("subject", value)}
          placeholder="Assunto"
          className="mb-3"
          required
        />
        <InputArea
          value={values.message}
          onChange={(value) => handleChange("message", value)}
          placeholder="Mensagem"
          className="mb-3"
          required
        />
        <div className=" flex w-full tablet:flex-row justify-between items-center desktop:flex flex-col">
          <Button
            role="button"
            aria-label="clique me para enviar"
            type="submit"
            className="btn-primary w-4/6 table:w-full"
            disabled={loading}
            icon={FaTelegramPlane}
          >
            <p className="text-lg text-bold">Enviar mensagem</p>
          </Button>
          <div className="flex gap-2">
            <Link href="https://www.linkedin.com/in/joaotelesk" target="_blank">
              <Button
                role="button"
                aria-label="clique me para linkedin"
                type="button"
                icon={GrLinkedinOption}
                size={20}
                className="btn-secondary"
                colorNormal="text-purple-500"
                colorHover="text-white-500"
              />
            </Link>
            <Link href="https://github.com/joaotelesk" target="_blank">
              <Button
                role="button"
                aria-label="clique me para github"
                type="button"
                icon={AiFillGithub}
                size={20}
                className="btn-secondary"
                colorNormal="text-purple-500"
                colorHover="text-white-500"
              />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=5585988277110"
              target="_blank"
            >
              <Button
                role="button"
                aria-label="clique me para whatsapp"
                type="button"
                icon={FaWhatsapp}
                size={20}
                className="btn-secondary"
                colorNormal="text-purple-500"
                colorHover="text-white-500"
              />
            </Link>
            <Link href="https://discord.gg/cDK55jn6" target="_blank">
              <Button
                role="button"
                aria-label="clique me para discord"
                type="button"
                icon={FaDiscord}
                size={20}
                className="btn-secondary"
                colorNormal="text-purple-500"
                colorHover="text-white-500"
              />
            </Link>
          </div>
        </div>
      </form>
      {toastIsOpen && (
        <div className="flex justify-center">
          <Toast />
        </div>
      )}
    </>
  );
}
