import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layouts/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Betr Beta",
    default: "Betr Beta",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
