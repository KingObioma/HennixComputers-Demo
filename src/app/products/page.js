import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "All Laptops — Hennix Computers",
  description:
    "Browse our full catalog of premium laptops. Dell, HP, Alienware, and more at the best prices in Nigeria.",
};

export default function ProductsPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-hennix-dark border-b border-hennix-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Our <span className="text-gradient">Laptop Collection</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Every machine below has been hand-selected, rigorously tested, and
            priced to give you maximum value. When it&apos;s gone, it&apos;s gone
            — these deals move fast.
          </p>
        </div>
      </section>

      {/* Urgency Banner */}
      <div className="bg-hennix-orange/10 border-b border-hennix-orange/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-2 text-sm">
          <svg
            className="w-4 h-4 text-hennix-orange animate-pulse"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.828a1 1 0 101.415-1.414L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-hennix-orange font-medium">
            Limited stock available — prices updated daily based on supply
          </span>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-12 md:py-16 bg-hennix-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-400 text-sm">
              Showing{" "}
              <span className="text-white font-semibold">{products.length}</span>{" "}
              laptops
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              All prices include delivery within Lagos
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-hennix-dark border border-hennix-gray rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Don&apos;t See What You Need?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              We have more inventory than what&apos;s listed here. Tell us your
              requirements and budget, and we&apos;ll find the perfect laptop for
              you — often at a better price than you&apos;d expect.
            </p>
            <a
              href="/contact"
              className="btn-primary"
            >
              Request a Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
