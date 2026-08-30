import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoToTop from "@/components/frontend/GoToTop";
import AuthWrapper from "@/components/frontend/AuthWrapper";
import FlashMessage from "@/components/frontend/flashmessage";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Urgent or Is It? ",
  description: "Step Back, check if it's really urgent.",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        <GoToTop/>
        <AuthWrapper>
          <FlashMessage />
          {children}
      </AuthWrapper>
      </body>
    </html>
    </>
  );
}
