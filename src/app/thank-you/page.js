"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProductById, formatPrice } from "@/data/products";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");
  const product = productId ? getProductById(productId) : null;

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >  <svg className="w-1 h-10 text-green-500"></svg>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Order Confirmed!
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-8">
          Thank you for choosing Hennix Computers. You just made one of the
          smartest tech purchases in Nigeria.
        </p>

        {/* Product confirmation */}
        {product && (
          <div className="bg-hennix-dark border border-hennix-gray rounded-2xl p-6 md:p-8 mb-10 text-left">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden shrink-0 bg-hennix-gray">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {product.shortDescription}
                </p>
                <div className="text-hennix-orange text-xl font-bold">
                  {formatPrice(product.price)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* What happens next */}
        <div className="bg-hennix-dark border border-hennix-gray rounded-2xl p-6 md:p-8 mb-10 text-left">
          <h2 className="text-white font-bold text-lg mb-5">
            What Happens Next?
          </h2>
          <div className="space-y-5">
            {[
              {
                step: "1",
                title: "Order Received",
                desc: "We've received your order and our team is already preparing your laptop for dispatch.",
              },
              {
                step: "2",
                title: "Quality Check",
                desc: "Your laptop will go through a final quality inspection to ensure everything is perfect before shipping.",
              },
              {
                step: "3",
                title: "Delivery to Your Doorstep",
                desc: "We'll deliver your laptop directly to the address you provided. Lagos orders typically arrive within 24-48 hours.",
              },
              {
                step: "4",
                title: "Enjoy Your New Machine",
                desc: "Unbox, power up, and experience the Hennix difference. We're always here if you need support.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-hennix-orange text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reassurance message */}
        <div className="bg-hennix-orange/5 border border-hennix-orange/20 rounded-xl p-6 mb-10">
          <p className="text-hennix-orange-light text-sm leading-relaxed">
            <strong>Your trust means everything to us.</strong> We&apos;ve served
            over 1,000 customers from our shop at 4 Pepple Street, Computer
            Village, Ikeja — and every single one received exactly what was
            promised. You&apos;re in safe hands.
          </p>
        </div>

        {/* Contact info */}
        <p className="text-gray-500 text-sm mb-8">
          Need help? Reach us anytime on WhatsApp:{" "}
          <span className="text-white font-medium">08115739933</span> or email{" "}
          <span className="text-white font-medium">info@hennixcomputers.com</span>
        </p>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/products" className="btn-primary">
            Continue Shopping
          </Link>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-32 pb-20 text-center text-gray-400">Loading...</div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
