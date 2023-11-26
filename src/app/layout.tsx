import Link from "next/link";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Proyecta Innova TR SAC",
  description: "Inmobiliaria Proyecta Innova TR SAC Proyecto Bosque Alto",
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
