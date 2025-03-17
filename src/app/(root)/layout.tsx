import type { Metadata } from "next";
import "../globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "next-themes";
import { poppins } from "@/font";

export const metadata: Metadata = {
  title: "Florencia Gómez",
  description: "Personal Website",
};

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
      <body className={`${poppins.className} tracking-wide text-[#474642] `}>
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
