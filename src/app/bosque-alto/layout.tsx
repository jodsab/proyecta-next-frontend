import Link from "next/link";
import { Roboto, Montserrat, Anton } from "next/font/google";

export const metadata = {
  title: "Bosque Alto - Proyecta Innova TR SAC",
  description: "El proyecto Bosque Alto de Inmobiliaria Proyecta Innova TR SAC",
};

const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-roboto"
});

const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-montserrat"
});

const anton = Anton({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-anton"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${roboto.className} ${montserrat.className} ${anton.className}`}>{children}</body>
    </html>
  );
}
