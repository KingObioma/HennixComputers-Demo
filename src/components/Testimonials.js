const testimonials = [
  {
    name: "Chinedu O.",
    role: "Software Developer",
    text: "I ordered a Dell Precision from Hennix and it arrived in perfect condition. The price was ₦200k less than what I was quoted at other shops in Computer Village. Absolutely legit!",
    rating: 5,
  },
  {
    name: "Aisha M.",
    role: "Business Owner",
    text: "I was skeptical at first, but Hennix delivered exactly what was promised. My HP EliteBook is fantastic and their customer service was top-notch. Already recommended them to my team.",
    rating: 5,
  },
  {
    name: "Emeka A.",
    role: "Gamer & Content Creator",
    text: "The Alienware M15 I got from Hennix is an absolute beast. They helped me pick the right spec for my needs and the price was unbeatable. These guys know their stuff!",
    rating: 5,
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-hennix-orange" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-hennix-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="section-subheading mx-auto">
            Real reviews from real buyers. Our reputation is built on trust,
            quality, and unbeatable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-hennix-black border border-hennix-gray rounded-xl p-6 hover:border-hennix-orange/30 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
