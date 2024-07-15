import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import { ThemeContextProvider } from "@/Context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ArcLancer Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[inter.className, "overflow-x-hidden"]}>
        <ThemeContextProvider>
          <div className="container max-w-[100vw] min-h-[100vh] bg-theme-white text-theme-black">
            <div className="wrapper max-w-[1536px] mx-auto px-[80px] desktopLg:max-w-[1366px] desktopSm:max-w-[1024px] laptopRg:max-w-[768px] laptopRg:px-[40px] tabletLg:max-w-[640px] tabletRg:max-w-[475px] ">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
