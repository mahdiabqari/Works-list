import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const newFont = localFont({
  src: 'Vazir.ttf'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`body ${newFont.className}`}>{children}</body>
    </html>
  );
}
