import { Poppins } from "next/font/google";
import Sidebar from "@/components/custom/Sidebar";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "Moovitz",
  description: "A platform for communities to transparently fund and prioritize public transportation projects using blockchain technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
