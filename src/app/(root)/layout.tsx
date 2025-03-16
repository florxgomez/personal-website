import type { Metadata } from "next";
import "../globals.css";
import NavBar from "@/components/NavBar";
import { Fira_Sans, Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Florencia Gómez",
  description: "Personal Website",
};

const poppins = Poppins({
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
      suppressHydrationWarning
      lang="en"
      className="h-screen w-screen bg-[url('/Wave.svg')] bg-no-repeat bg-bottom bg-contain"
    >
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className={"space-y-3 mx-10 md:mx-40 dark:text-gray-200"}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
