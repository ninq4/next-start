import { Inter } from "next/font/google";
// import "./globals.css";
import "@/app/styles/main.sass"
import Header from "@/app/components/Header/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App",
  description: "create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
