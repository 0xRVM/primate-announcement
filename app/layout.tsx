import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Primate: Fin de una Era",
  description: "Cierre de Primate Esports",
  icons: [
    { rel: "icon", url: "/primate-ico.ico", sizes: "any" },
    { rel: "apple-touch-icon", url: "/primate-logo-180.png", sizes: "180x180" },
    { rel: "apple-touch-icon", url: "/primate-logo-152.png", sizes: "152x152" },
    { rel: "apple-touch-icon", url: "/primate-logo-120.png", sizes: "120x120" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
