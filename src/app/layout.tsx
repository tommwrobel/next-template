import "./globals.css";
import { Quicksand } from "next/font/google";
import { ReactNode } from "react";

const quicksandFont = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App Template",
  description:
    "Starting point for developing a Next.js application with pre-configured basic settings",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={quicksandFont.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
