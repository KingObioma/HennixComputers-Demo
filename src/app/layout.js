import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hennix Computers — Best Laptop Prices in Nigeria",
  description:
    "Get premium laptops at the best prices in Nigeria. Dell, HP, Lenovo, Alienware, Acer, Asus & more. Located at Computer Village, Ikeja, Lagos.",
  keywords:
    "laptops, computers, Nigeria, Lagos, Computer Village, Dell, HP, Alienware, gaming laptops, business laptops",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
