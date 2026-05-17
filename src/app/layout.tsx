import "./globals.css";
import "leaflet/dist/leaflet.css";
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import HeaderBanner from "@/components/HeaderBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FooterWrapper from "@/components/FooterWrapper";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "JT Alunan Dental Clinic",
  description: "Gentle dental care in Oton, Iloilo with Alaga, Tiwala, and Education."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body className="font-body text-ink">
        <div className="min-h-screen flex flex-col">
          <HeaderBanner />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            <a
              href="https://m.me/JTAlunanDentalClinic"
              target="_blank"
              rel="noreferrer"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-lift transition hover:-translate-y-0.5"
              aria-label="Chat on Messenger"
            >
              <i className="fa-brands fa-facebook-messenger text-3xl" aria-hidden="true" />
            </a>
            <button
              type="button"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-cream shadow-lift transition hover:-translate-y-0.5"
              aria-label="Open chatbot"
            >
              <img
                src="/images/Logo_wbg.png"
                alt="JT Alunan Dental Clinic"
                className="h-16 w-16 object-contain"
              />
            </button>
          </div>
          <FooterWrapper />
        </div>
      </body>
    </html>
  );
}
