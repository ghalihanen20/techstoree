import { Roboto, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "TechStore – High-Tech & Innovation",
  description:
    "Découvrez les meilleurs produits technologiques au meilleur prix.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <Header />
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
