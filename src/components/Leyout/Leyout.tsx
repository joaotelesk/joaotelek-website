import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

interface LeyoutProps {
  children: React.ReactNode;
}

export function Leyout({ children }: LeyoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
