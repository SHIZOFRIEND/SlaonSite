import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata = {
  title: "Салон красоты",
  description: "Салон красоты 2024",
};
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-[calc(100vh)] flex flex-col`}>
    <Header/>
    <main className="flex-grow flex justify-center bg-[url('/Resourses/back.png')] bg-cover bg-center">
        {children}
    </main>
    <Footer/>
    </body>
    </html>
  );
}
