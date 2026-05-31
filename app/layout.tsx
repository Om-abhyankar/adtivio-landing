import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adtivio | Premium Digital Growth Systems",
  description:
    "Engineering high-ROAS media buying and programmatic ecosystems for scalable digital growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
