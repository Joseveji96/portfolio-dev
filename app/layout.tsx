import type { Metadata } from "next";
import "./globals.css";
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const metadata: Metadata = {
  title: "Portfolio Eduardo",
  description: "Web and mobile developer",
  icons: {
    icon:["images/icon-portfolio.ico?v=4"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}