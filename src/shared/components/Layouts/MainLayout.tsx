import Head from "next/head";
import { Header, Footer } from "@/shared/components/UI";

interface IProps {
  children: React.ReactNode;
  title?: string;
  header?: boolean;
  footer?: boolean;
}
export const MainLayout = ({
  children,
  title = "Banco de Crédito del Perú",
  header = true,
  footer = true,
}: IProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {header && <Header />}
      <main>{children}</main>
      {footer && <Footer />}
    </>
  );
};
