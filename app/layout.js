import { IBM_Plex_Mono, Inter, Manrope } from "next/font/google";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Algorizmih",
    template: "%s · Algorizmih",
  },
  description:
    "The Future of Patient Care with the Power of Artificial Intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${plex.variable}`}>
      <body className="min-h-screen bg-white font-sans text-body antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
