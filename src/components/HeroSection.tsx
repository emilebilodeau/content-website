import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 bg-[#080a20]">
      <div className="container">
        <div className="grid grid--2-col items-center gap-12">
          <div className="animate-fade-in">
            <h1 className="font-bold text-white mb-6 leading-tight">
              Bold. Elevated.
              <span className="block text-blue-400">Effortless.</span>
            </h1>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Blind Owl Flavour Co. crafts bold, premium extracts and syrups
              that elevate everything they touch — from lattes to cocktails to
              desserts. Designed for the flavour-obsessed!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="btn btn-primary text-lg px-8 py-4">
                Shop Collection
              </Link>
              <Link
                href="/about"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="animate-slide-in">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Abstract visual elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl"></div>
                <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-full"></div>
                <div className="absolute top-24 right-12 w-12 h-12 bg-white/15 rounded-full"></div>
                <div className="absolute bottom-16 left-16 w-12 h-12 bg-white/25 rounded-full"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400 rounded-full shadow-lg animate-bounce"></div>
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-300 rounded-full shadow-lg animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid--4-col text-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="font-bold text-blue-400 mb-2">100%</div>
            <div className="text-gray-300">Natural</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="font-bold text-blue-400 mb-2">0</div>
            <div className="text-gray-300">Preservatives</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="font-bold text-blue-400 mb-2">Made in</div>
            <div className="text-gray-300">Vancouver</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="font-bold text-blue-400 mb-2">Small</div>
            <div className="text-gray-300">Batches</div>
          </div>
        </div>
      </div>
    </section>
  );
}
