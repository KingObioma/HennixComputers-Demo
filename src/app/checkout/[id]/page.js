"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductById, formatPrice } from "@/data/products";

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const product = getProductById(params.id);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    payment: "bank-transfer",
  });

  const [submitting, setSubmitting] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
        <p className="text-gray-400 mb-6">
          The product you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/products" className="btn-primary">
          Browse All Laptops
        </Link>
      </div>
    );
  }

  const savings = product.oldPrice - product.price;

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate processing
    setTimeout(() => {
      router.push("/thank-you?product=" + product.id);
    }, 1500);
  }

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="bg-hennix-dark border-b border-hennix-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-hennix-orange transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-hennix-orange transition-colors"
            >
              Laptops
            </Link>
            <span>/</span>
            <span className="text-gray-300">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* ===== LEFT: Product Summary ===== */}
          <div>
            {/* Product Image */}
            <div className="relative aspect-square bg-hennix-dark border border-hennix-gray rounded-2xl overflow-hidden mb-6">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 badge">{product.badge}</div>
            </div>

            {/* Product Info */}
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {product.name}
            </h1>
            <p className="text-gray-400 leading-relaxed mb-6">
              {product.longDescription}
            </p>

            {/* Specs Table */}
            <div className="bg-hennix-dark border border-hennix-gray rounded-xl p-5 mb-6">
              <h3 className="text-white font-semibold mb-3">Full Specifications</h3>
              <div className="space-y-2.5">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-gray-500 capitalize">{key}</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-hennix-dark border border-hennix-gray rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Original Price</span>
                <span className="text-gray-500 line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Hennix Price</span>
                <span className="text-hennix-orange text-xl font-bold">
                  {formatPrice(product.price)}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-hennix-gray">
                <span className="text-green-400 font-medium">You Save</span>
                <span className="text-green-400 font-bold">
                  {formatPrice(savings)}
                </span>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: Checkout Form ===== */}
          <div>
            <div className="bg-hennix-dark border border-hennix-gray rounded-2xl p-6 md:p-8 sticky top-28">
              <h2 className="text-xl font-bold text-white mb-1">
                Complete Your Order
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Secure your {product.shortName} today. Limited units in stock.
              </p>

              {/* Urgency */}
              <div className="bg-hennix-orange/10 border border-hennix-orange/20 rounded-lg px-4 py-3 mb-6 flex items-start gap-2.5">
                <svg
                  className="w-5 h-5 text-hennix-orange shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-sm">
                  <span className="text-hennix-orange font-semibold">
                    High demand!
                  </span>{" "}
                  <span className="text-gray-400">
                    This laptop is one of our fastest sellers. Place your order
                    now to lock in this price before stock runs out.
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="input-field"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="input-field"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="08X XXXX XXXX"
                    className="input-field"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Street address"
                    className="input-field"
                  />
                </div>

                {/* City & State */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={form.city}
                      onChange={handleChange}
                      placeholder="e.g. Ikeja"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={form.state}
                      onChange={handleChange}
                      placeholder="e.g. Lagos"
                      className="input-field"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">
                    Payment Method *
                  </label>
                  <select
                    name="payment"
                    value={form.payment}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="bank-transfer">Bank Transfer</option>
                    <option value="pay-on-delivery">Pay on Delivery (Lagos only)</option>
                    <option value="card">Card Payment</option>
                  </select>
                </div>

                {/* Order Total */}
                <div className="bg-hennix-black rounded-xl p-4 border border-hennix-gray-light">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-400 text-sm">
                      {product.shortName}
                    </span>
                    <span className="text-white font-medium">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-400 text-sm">Delivery</span>
                    <span className="text-green-400 text-sm font-medium">
                      FREE
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 mt-2 border-t border-hennix-gray">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-hennix-orange text-lg font-bold">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Processing Order...
                    </span>
                  ) : (
                    <>
                      Place Order — {formatPrice(product.price)}
                    </>
                  )}
                </button>

                {/* Trust */}
                <div className="flex items-center justify-center gap-4 pt-2 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Secure Checkout
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verified Seller
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Warranty
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
