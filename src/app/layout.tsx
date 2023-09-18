import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fidooo",
  description: "Fidooo Engineering",
  icons: {
    icon: "./favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="text-[14px] md:text-base bg-[#000]">
      <body className={poppins.className}>
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
