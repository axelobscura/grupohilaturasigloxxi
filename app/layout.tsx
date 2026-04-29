import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupo Hilatura Siglo XXI",
  description: "En Grupo Hilatura Siglo XXI llevamos más de 30 años dando vida a las marcas a través de la publicidad textil. Creemos que cada prenda es una oportunidad para transmitir identidad, estilo y dejar una huella en quien la ve y la usa. Nos apasiona ayudarte a posicionar tu marca, a hacerla memorable y a reflejar su esencia en cada detalle, combinando calidad, diseño y funcionalidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
