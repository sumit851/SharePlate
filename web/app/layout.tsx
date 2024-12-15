import "./globals.css";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SharePlate",
  description: "Food Sharing App",
  icons: {
    icon: [
      {
        url: "/images/app-logo.jpeg",
        href: "/images/app-logo.jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/app-logo.jpeg" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
