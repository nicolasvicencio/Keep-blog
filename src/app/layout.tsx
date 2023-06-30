import { Footer, Header } from "@/components";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Keep Blog",
  description: "Programming and tech articles,libraries,linux and more!",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white dark:dark-bg"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
