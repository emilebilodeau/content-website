import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-bold mb-6">Ready to Elevate Your Flavours?</h2>
          <p className="mb-8 text-blue-100 leading-relaxed">
            Join thousands of flavour enthusiasts who have already discovered
            the difference our premium extracts and syrups can make in their
            creations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/shop"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Shop Collection
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>

          <div className="grid grid--3-col gap-8 mt-12">
            <div className="text-center">
              <div className="font-bold mb-2">Free</div>
              <div className="text-blue-200">Local Delivery</div>
            </div>
            <div className="text-center">
              <div className="font-bold mb-2">Free</div>
              <div className="text-blue-200">Shipping Over $90</div>
            </div>
            <div className="text-center">
              <div className="font-bold mb-2">Made in</div>
              <div className="text-blue-200">Vancouver</div>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-12 pt-8 border-t border-blue-500">
            <p className="text-blue-200 mb-4">
              Follow us on Instagram for daily inspiration
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-75">
              <div className="text-blue-200 font-semibold">
                @blindowlflavourco
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
