import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Fira_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Florencia Gómez",
  description: "Personal Website",
};

const fira = Fira_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-screen w-screen bg-[url('/Wave.svg')] bg-no-repeat bg-bottom bg-contain"
    >
      <body className={fira.className}>
        <NavBar />
        <main className={"space-y-3 mx-10 md:mx-40 "}>{children}</main>
      </body>
    </html>
  );
}
