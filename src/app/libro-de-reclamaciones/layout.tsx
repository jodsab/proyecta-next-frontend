import Link from "next/link";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Libro de reclamaciones - Proyecta Innova TR SAC",
  description: "Proyecta Innova TR SAC - Libro de reclamaciones, en esta sección podrás presentar algun reclamo o queja por producto o servicio",
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
