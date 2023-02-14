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
import { Logo } from "../Logo/Logo";

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
          "max-w-[550px] bg-black-200 rounded px-7 py-8 flex flex-col text-center items-center mobile:px-3",
          className
        )}
      >
        <Logo size={35} className="font-bold text-sm text-white-500" />

        <div className="mb-10 w-4/5 flex justify-center">
          <Text className="text-white-300 font-normal">
            Me diga o que você precisa, o propósito do projeto ou os problemas
            que vou solucionar. Tentarei the responder dentro de 24 horas.
          </Text>
        </div>

        <div className="flex gap-5 desktop:flex-row justify-between mb-5 w-full tablet:flex flex-col  ">
          <Input
            value={values.name}
            onChange={(value) => handleChange("name", value)}
            placeholder="Seu nome"
          />
          <Input
            value={values.email}
            onChange={(value) => handleChange("email", value)}
            placeholder="Endereço de e-mail"
            className=""
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
        <div className=" flex w-full tablet:flex-row justify-between items-center desktop:flex flex-col">
          <Button type="submit" className="w-4/6 table:w-full">
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
