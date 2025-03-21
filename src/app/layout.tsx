import type { Metadata } from "next";
import "./globals.scss";
import { notoSans } from './fonts'
import Script from "next/script";
import MobileCheck from "./components/MobileCheck";

export const metadata: Metadata = {
  title: "Jason Florence | UX/UI Creative Developer",
  description: "The portfolio site of Jason Florence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-YNLS32SVZE`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YNLS32SVZE');
          `}
        </Script>
      </head>
      <body className={`${notoSans.className} flex flex-col place-content-center items-center h-screen w-screen bg-stone-900`}>
        <MobileCheck>
          {children}
        </MobileCheck>
      </body>
    </html>
  );
}
