import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { COMPANY } from "@/app/data";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.siteUrl),
  title: {
    default: `${COMPANY.name} | Mudanzas y transporte en Perú`,
    template: `%s | ${COMPANY.name}`
  },
  description: COMPANY.description,
  keywords: [
    "mudanzas Perú",
    "mudanzas Lima",
    "transporte de carga",
    "plataforma hidráulica",
    "embalaje de mudanza",
    "traslado de mascotas",
    "traslado de vehículos",
    "mudanzas internacionales"
  ],
  openGraph: {
    title: `${COMPANY.name} | Mudanzas y transporte en Perú`,
    description: COMPANY.description,
    url: COMPANY.siteUrl,
    siteName: COMPANY.name,
    locale: "es_PE",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b2341"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE">
      <body>{children}</body>
    </html>
  );
}
