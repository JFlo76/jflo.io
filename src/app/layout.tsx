import type { Metadata } from "next";
import "./globals.scss";
import { notoSans } from './fonts'

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
      <body className={`${notoSans.className} flex flex-col place-content-center h-screen w-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
