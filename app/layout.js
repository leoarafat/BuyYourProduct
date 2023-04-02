import Header from "@/components/layouts/Header";
import "./globals.css";
import { GlobalProvider } from "./GlobalProvider";

export const metadata = {
  title: "Buy your product",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          <Header />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
