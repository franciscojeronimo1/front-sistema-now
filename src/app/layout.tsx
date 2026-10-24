import type { Metadata } from "next";
import { Syne, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sistemanow.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sistema Now | Sites, apps e sistemas para empresas",
  description:
    "Sistema Now: sites, apps e sistemas pra empresas venderem mais. Pacotes pra comércio, clínica, agro e operações — entrega rápida e suporte.",
  keywords: [
    "Sistema Now",
    "sites para empresas",
    "apps sob medida",
    "sistemas web",
    "catálogo WhatsApp",
    "agendamento online",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Sistema Now",
    title: "Sistema Now | Sites, apps e sistemas para empresas",
    description:
      "Sistema Now: sites, apps e sistemas pra empresas venderem mais. Pacotes pra comércio, clínica, agro e operações — entrega rápida e suporte.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Now | Sites, apps e sistemas para empresas",
    description:
      "Sistema Now: sites, apps e sistemas pra empresas venderem mais. Pacotes pra comércio, clínica, agro e operações — entrega rápida e suporte.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Sistema Now",
  description:
    "Sites, apps e sistemas sob medida para empresas — comércio, clínica, agro e operações.",
  url: siteUrl,
  telephone: "+55-35-9931-2337",
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-35-9931-2337",
    contactType: "sales",
    availableLanguage: "Portuguese",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${syne.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
