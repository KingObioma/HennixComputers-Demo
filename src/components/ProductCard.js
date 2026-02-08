import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/data/products";

export default function ProductCard({ product, featured = false }) {
  const savings = product.oldPrice - product.price;
  const savingsPercent = Math.round((savings / product.oldPrice) * 100);

  return (
    <div className="card group">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-hennix-gray">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 badge">{product.badge}</div>
        )}
        {/* Savings Badge */}
        <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
          Save {savingsPercent}%
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-hennix-orange text-xs font-semibold uppercase tracking-wider">
            {product.brand}
          </span>
          <span className="text-gray-600">•</span>
          <span className="text-gray-500 text-xs uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-hennix-orange transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Key Specs */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {[product.specs.processor, product.specs.ram, product.specs.storage].map(
            (spec) => (
              <span
                key={spec}
                className="text-xs bg-hennix-gray text-gray-300 px-2 py-1 rounded"
              >
                {spec}
              </span>
            )
          )}
        </div>

        {/* Price & CTA */}
        <div className="flex items-end justify-between">
          <div>
            <div className="text-gray-500 text-sm line-through">
              {formatPrice(product.oldPrice)}
            </div>
            <div className="text-hennix-orange text-xl font-bold">
              {formatPrice(product.price)}
            </div>
          </div>
          <Link
            href={`/checkout/${product.id}`}
            className="btn-small whitespace-nowrap"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
}
