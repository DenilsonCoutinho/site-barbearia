import "./globals.css";
import ClientLayout from "@/client-layout";
import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "Domínio dos Cortes na Tesoura | Curso com Erick Brisola",
  description:
    "Curso online de 5 horas para barbeiros iniciantes ou experientes dominarem a tesoura e entregarem cortes melhores na rotina real da barbearia.",
  icons: {
    icon: "/brisola-favicon.jpg",
    shortcut: "/brisola-favicon.jpg",
    apple: "/brisola-favicon.jpg",
  },
  openGraph: {
    title: "Domínio dos Cortes na Tesoura | Curso com Erick Brisola",
    description:
      "Curso online de 5 horas para barbeiros iniciantes ou experientes dominarem a tesoura e entregarem cortes melhores na rotina real da barbearia.",
    type: "website",
    images: [
      {
        url: "/brisola-social-preview.jpg",
        width: 600,
        height: 600,
        alt: "Logo da Barbearia Brisola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Domínio dos Cortes na Tesoura | Curso com Erick Brisola",
    description:
      "Curso online de 5 horas para barbeiros iniciantes ou experientes dominarem a tesoura e entregarem cortes melhores na rotina real da barbearia.",
    images: ["/brisola-social-preview.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
