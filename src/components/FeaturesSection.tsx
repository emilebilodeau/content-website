export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "No Preservatives",
      description:
        "Pure flavour, nothing you don't need. Clean, bold taste with zero compromises.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Flavour Forward",
      description:
        "Robust, bold flavours that won't get lost or watered down in your creations.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Nothing Artificial",
      description:
        "No fake colours, flavours, or additives — just real ingredients you can actually pronounce.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Made in Vancouver",
      description:
        "Made in small batches, right here in the heart of Strathcona, Vancouver.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Small Batch Crafted",
      description:
        "Each batch is carefully crafted with attention to detail and quality control.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Flavour Obsessed",
      description:
        "Designed for the flavour-obsessed who demand the best in their culinary creations.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Crafted Without Compromise
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            We combine traditional craftsmanship with modern techniques to
            deliver flavours that exceed expectations and elevate your
            creations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid--3-col">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-amber-800 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              Ready to Elevate Your Flavours?
            </h3>
            <p className="text-lg text-amber-800 mb-8 max-w-2xl mx-auto">
              Join thousands of flavour enthusiasts who have transformed their
              culinary creations with our premium extracts and syrups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/shop" className="btn btn-primary text-lg px-8 py-4">
                Shop Collection
              </a>
              <a
                href="/contact"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
