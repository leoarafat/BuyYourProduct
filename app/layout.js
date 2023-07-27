// import Navbar from "@/components/layouts/Navbar";
import Header from "@/components/layouts/Header";
import { GlobalProvider } from "./GlobalProvider";
import "./globals.css";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/layouts/Navbar"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <GlobalProvider>
          <Navbar />
          {/* <Header /> */}
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
