import "../styles/globals.css";

import type { Metadata } from "next";

import { Header } from "@/components/header/header";
import ReactQueryProvider from "@/providers/react-query-provider";
import { dmDisplay, pretendard } from "@/public/fonts/fonts";

export const metadata: Metadata = {
  title: "Elio Makers",
  description: "만드는 사람들",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} ${dmDisplay.variable}`}>
        <ReactQueryProvider>
          <Header />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
