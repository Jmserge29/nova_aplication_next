"use client";
import "./globals.css";
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Providers from "./Providers";

export const metadata = {
  title: "Nova-App",
  description: "Creating application by XxJmsergexX",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
