import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import { products } from "@/data/products";

export default function HomePage() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative pt-20 md:pt-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-hennix-black via-hennix-dark to-hennix-black" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-hennix-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-hennix-orange/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-block badge mb-6">
                #1 Trusted Laptop Dealer in Computer Village
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Premium Laptops.{" "}
                <span className="text-gradient">Unbeatable Prices.</span>{" "}
                Delivered to Your Door.
              </h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                Stop overpaying for laptops. Hennix Computers gives you
                brand-name Dell, HP, Alienware, and more — fully tested and
                verified — at prices that make our competitors nervous. Join over
                1,000 smart buyers across Nigeria.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="btn-primary text-lg">
                  Browse Laptops
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link href="/contact" className="btn-secondary text-lg">
                  Talk to Us
                </Link>
              </div>

              {/* Trust signals */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  All Devices Tested
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Nationwide Delivery
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Warranty Included
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-hennix-orange/20 to-transparent rounded-3xl" />
                <Image
                  src="/images/products/product4.jpg"
                  alt="Hennix Computers - Premium Laptops"
                  fill
                  className="object-cover rounded-3xl shadow-2xl shadow-hennix-orange/10"
                  priority
                />
                {/* Floating price tag */}
                <div className="absolute -bottom-4 -left-4 bg-hennix-dark border border-hennix-orange rounded-xl px-5 py-3 shadow-xl">
                  <div className="text-xs text-gray-400">Starting from</div>
                  <div className="text-hennix-orange text-xl font-bold">
                    ₦500,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BRAND BAR ============ */}
      <section className="bg-hennix-dark border-y border-hennix-gray py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-gray-500">
            <span className="text-sm font-medium uppercase tracking-widest">
              Trusted Brands:
            </span>
            {["Dell", "HP", "Lenovo", "Alienware", "Acer", "Asus", "Mac"].map(
              (brand) => (
                <span
                  key={brand}
                  className="text-lg font-semibold text-gray-400 hover:text-hennix-orange transition-colors cursor-default"
                >
                  {brand}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="py-16 md:py-24 bg-hennix-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">
              Featured <span className="text-gradient">Laptops</span>
            </h2>
            <p className="section-subheading mx-auto">
              Hand-picked machines at prices you won&apos;t find anywhere else.
              Every laptop tested, verified, and ready to perform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} featured />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/products" className="btn-secondary">
              View All Laptops
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <WhyChooseUs />

      {/* ============ TESTIMONIALS ============ */}
      <Testimonials />

      {/* ============ CTA BANNER ============ */}
      <section className="py-16 md:py-24 bg-hennix-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Get Your <span className="text-gradient">Dream Laptop?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Every day you wait is a day you&apos;re stuck with a slow, unreliable
            machine. Upgrade today and experience the difference a premium laptop
            makes in your work, gaming, and life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-primary text-lg">
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="btn-secondary text-lg"
            >
              WhatsApp Us: 08115739933
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
