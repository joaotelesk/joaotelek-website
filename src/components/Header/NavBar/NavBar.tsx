// Components
import Link from "next/link";
import { Text } from "../../Text/Text";

// Hooks
import { useRouter } from "next/router";

// interfaces
export interface NavbarProps {
  className?: string;
  classNameLink?: string;
}

export function Navbar({ className, classNameLink }: NavbarProps) {
  const router = useRouter();
  return (
    <>
      <nav className={className}>
        {[
          ["Início", "/"],
          ["Serviços", ""],
          ["Portfólio", "/portfolio"],
          ["Skills", ""],
        ].map(([title, url]) => (
          <Link
            href={url}
            key={title}
            className={`font-bold  ${
              router.asPath === url
                ? "text-white-500 border-purple-500 border-b-2  pb-2"
                : "text-white-200 border-white-200 border-b-2  pb-2 desktop:border-none"
            } hover:border-b-2 hover:border-purple-500 pb-2`}
          >
            <Text
              size="lg"
              className={`font-bold ${
                router.asPath === url ? "text-white-500" : "text-white-200"
              }`}
            >
              {title}
            </Text>
          </Link>
        ))}
      </nav>
    </>
  );
}
