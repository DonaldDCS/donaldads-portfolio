import type { Metadata } from "next";
import "./styles/globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ClientFadeIn from "./ClientFadeIn";

export const metadata: Metadata = {
  title: "Donald Stooks' Portfolio",
  description: "The professional portfolio of Donald ADS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning used because next-themes adds class/style after hydration */}
      <body className="antialiased">
        <ClientFadeIn />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};