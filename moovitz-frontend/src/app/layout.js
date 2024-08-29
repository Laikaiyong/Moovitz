import { Poppins } from "next/font/google";
import { Oxygen } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Sidebar from "@/components/custom/Sidebar";
import { Toaster } from "@/components/sonner/toast";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const runtime = "edge";

export const metadata = {
  title: "Moovitz",
  description:
    "A platform for communities to transparently fund and prioritize public transportation projects using blockchain technology",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          {/*<Sidebar />*/}
          {children}
          <Toaster closeButton  />
        </Providers>
      </body>
    </html>
  );
}
