import Link from "next/link";
import { useRouter } from "next/router";
import { Text } from "../../Text/Text";

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const router = useRouter();
  return (
    <>
      <nav className={className}>
        {[
          ["Início", "/"],
          ["Serviços", "/paginaTeste"],
          ["Portfólio", ""],
          ["Skills", ""],
        ].map(([title, url]) => (
          <Link href={url} key={title}>
            <Text
              size="lg"
              className={`font-bold ${
                router.asPath === url
                  ? "text-white-500 border-purple-500 border-b-2  pb-2"
                  : "text-white-200"
              } hover:border-b-2 hover:border-purple-500 pb-2`}
            >
              {title}
            </Text>
          </Link>
        ))}
      </nav>
    </>
  );
}
