// Components
import { Button } from "../Button/Button";
import { CardImg } from "../CardImg/CardImg";
import { Input } from "../Input/Input";
import { InputArea } from "../InputArea/InputArea";
import { Text } from "../Text/Text";
import Link from "next/link";
import { TelegramLogo } from "phosphor-react";

// Utilities
import clsx from "clsx";

// Hooks
import { useState } from "react";

// Interfaces
type FormValue = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export interface FormProps {
  onSubmit: (values: FormValue) => void;
  className?: string;
}

// Variables
const initState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Form({ onSubmit, className }: FormProps) {
  const [values, setValues] = useState<FormValue>(initState);

  function handleChange(key: keyof FormValue, value: string) {
    setValues({ ...values, [key]: value });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onSubmit(values);
    setValues(initState);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={clsx(
          "max-w-[550px] bg-black-200 rounded px-7 py-8 flex flex-col text-center items-center",
          className
        )}
      >
        <div className="flex mb-4 items-center gap-2 mt-5">
          <img src="/logo.svg" alt="minha logo" sizes="34px" />
          <Text className="font-bold text-sm text-white-500">João Teles</Text>
        </div>
        <div className="mb-8 w-4/5 flex justify-center">
          <Text className="text-white-300 font-normal">
            Me diga o que você precisa, o propósito do projeto ou os problemas
            que vou solucionar. Tentarei the responder dentro de 24 horas.
          </Text>
        </div>

        <div className="flex justify-between mb-5 w-full">
          <Input
            value={values.name}
            onChange={(value) => handleChange("name", value)}
            placeholder="Seu nome"
          />
          <Input
            value={values.email}
            onChange={(value) => handleChange("email", value)}
            placeholder="Endereço de e-mail"
            className="ml-7"
          />
        </div>

        <Input
          value={values.subject}
          onChange={(value) => handleChange("subject", value)}
          placeholder="Assunto"
          className="mb-5"
        />
        <InputArea
          value={values.message}
          onChange={(value) => handleChange("message", value)}
          placeholder="Mensagem"
          className="mb-5"
        />
        <div className="flex justify-between w-full">
          <Button className="w-3/6">
            <p className="text-lg text-bold">Enviar mensagem</p>
            <TelegramLogo size={24} />
          </Button>
          <div className="flex gap-2">
            <Link href="https://www.linkedin.com/in/joaotelesk">
              <CardImg alt="logo linkedin" src="/linkedin-purple.svg" />
            </Link>
            <Link href="https://github.com/joaotelesk">
              <CardImg alt="logo github" src="/github-purple.svg" />
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=5585988277110">
              <CardImg alt="logo whatsapp" src="/whatsapp-purple.svg" />
            </Link>
            <Link href="https://discord.gg/cDK55jn6">
              <CardImg alt="logo discord" src="/discord-purple.svg" />
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}