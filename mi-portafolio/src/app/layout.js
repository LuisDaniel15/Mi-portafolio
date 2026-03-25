import { Geist } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Mi Portafolio",
  description: "Portafolio de desarrollador web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={geist.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}