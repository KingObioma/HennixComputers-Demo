import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-hennix-dark border-t border-hennix-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo/logo.jpg"
                alt="Hennix Computers"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <span className="text-lg font-bold text-white">Hennix</span>
                <span className="text-lg font-bold text-hennix-orange">
                  {" "}Computers
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nigeria&apos;s trusted source for premium laptops at unbeatable
              prices. Every device tested, verified, and delivered with
              confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "All Laptops" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-hennix-orange text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-white font-semibold mb-4">Brands We Carry</h3>
            <ul className="space-y-2.5">
              {["Dell", "HP", "Lenovo", "Alienware", "Acer", "Asus", "Apple Mac"].map(
                (brand) => (
                  <li key={brand}>
                    <span className="text-gray-400 text-sm">{brand}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Reach Us</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 mt-0.5 text-hennix-orange shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  4 Pepple Street, Computer Village,
                  <br />
                  Ikeja, Lagos State
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-hennix-orange shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>08115739933</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-hennix-orange shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@hennixcomputers.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-hennix-gray flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Hennix Computers. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Best Price Nigeria &mdash; Computer Village, Ikeja
          </p>
        </div>
      </div>
    </footer>
  );
}
