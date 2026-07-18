import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://bform.com.br"),
  title: "BFORM — Performance. Estética. Longevidade.",
  description:
    "A Experiência BFORM entrega treinamento premium baseado em ciência aplicada, estratégia e acompanhamento próximo para quem valoriza resultados, saúde e tempo.",
  keywords: [
    "personal trainer premium",
    "treinamento baseado em ciência",
    "BFORM",
    "hipertrofia",
    "performance",
    "consultoria fitness premium"
  ],
  openGraph: {
    title: "BFORM — Performance. Estética. Longevidade.",
    description:
      "Ciência aplicada para quem valoriza resultados e tempo. Conheça a Experiência BFORM.",
    url: "https://bform.com.br",
    siteName: "BFORM",
    images: ["/images/coach.jpg"],
    locale: "pt_BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
