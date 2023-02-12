import clsx from "clsx";
import { TelegramLogo } from "phosphor-react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { CardImg } from "../CardImg/CardImg";
import { Input } from "../Input/Input";
import { InputArea } from "../InputArea/InputArea";
import { Text } from "../Text/Text";

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
          "max-w-[600px] bg-black-200 rounded px-7 py-8 flex flex-col text-center items-center",
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
          <div className="flex">
            <CardImg alt="logo linkedin" src="/linkedin-purple.svg" />
            <CardImg alt="logo github" src="/github-purple.svg" />
            <CardImg alt="logo whatsapp" src="/whatsapp-purple.svg" />
            <CardImg alt="logo discord" src="/discord-purple.svg" />
          </div>
        </div>
      </form>
    </>
  );
}
