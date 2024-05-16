import Link from "next/link";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Huerto Urbano - Proyecta Innova TR SAC",
  description: "El proyecto Huerto Urbano de Inmobiliaria Proyecta Innova TR SAC",
};

const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
