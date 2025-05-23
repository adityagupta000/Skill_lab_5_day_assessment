import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/Context/CartContext"; // Import CartProvider
import { FavoriteProvider } from "@/app/Context/FavoriteContext"; // Import FavoriteProvider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Wrap CartProvider and FavoriteProvider properly */}
        <CartProvider>
          <FavoriteProvider>
            {children} {/* Render children only once inside both providers */}
          </FavoriteProvider>
        </CartProvider>
      </body>
    </html>
  );
}
