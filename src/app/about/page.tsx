import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
                About Blind Owl Flavour Co.
              </h1>
              <p className="text-xl text-amber-800 leading-relaxed">
                We're a team of passionate flavour artisans dedicated to
                crafting premium extracts and syrups that transform ordinary
                ingredients into extraordinary culinary experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid--2-col items-center gap-12">
              <div>
                <h2 className="text-4xl font-bold text-amber-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-amber-800 mb-6 leading-relaxed">
                  To craft bold, premium extracts and syrups that elevate
                  everything they touch — from your morning latte to your
                  evening cocktail, from simple cookies to elaborate desserts.
                </p>
                <p className="text-lg text-amber-800 leading-relaxed">
                  We believe that exceptional flavours should be accessible to
                  everyone, whether you're a professional chef, a home baker, or
                  simply someone who appreciates the art of great taste.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-12 text-white text-center">
                <div className="text-6xl font-bold mb-4">100%</div>
                <div className="text-xl">Natural Ingredients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-amber-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-amber-800 max-w-3xl mx-auto">
                These principles guide everything we do and shape how we craft
                our flavours.
              </p>
            </div>

            <div className="grid grid--3-col gap-8">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-amber-600"
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
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  Quality First
                </h3>
                <p className="text-amber-800">
                  We source only the finest ingredients and never compromise on
                  quality, ensuring every product meets our exacting standards.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-orange-600"
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
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  Flavour Innovation
                </h3>
                <p className="text-amber-800">
                  We constantly explore new flavour combinations and techniques
                  to create unique taste experiences that inspire creativity.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-amber-600"
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
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  Community
                </h3>
                <p className="text-amber-800">
                  We build relationships with our customers, suppliers, and the
                  culinary community, sharing knowledge and celebrating great
                  food.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid--2-col items-center gap-12">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-12 text-white text-center">
                <div className="text-6xl font-bold mb-4">Strathcona</div>
                <div className="text-xl">Vancouver, BC</div>
                <div className="text-lg mt-4">Where we craft every batch</div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-amber-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-amber-800 mb-6 leading-relaxed">
                  Born in the heart of Vancouver's historic Strathcona
                  neighbourhood, Blind Owl Flavour Co. began with a simple idea:
                  create flavours that don't just enhance food, but transform
                  it.
                </p>
                <p className="text-lg text-amber-800 leading-relaxed">
                  What started as a small kitchen experiment has grown into a
                  beloved local business, serving chefs, bakers, and flavour
                  enthusiasts across Canada and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-amber-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                Meet Our Flavour Team
              </h2>
              <p className="text-xl text-amber-800 max-w-3xl mx-auto">
                The passionate individuals behind our flavours who are dedicated
                to helping you create extraordinary culinary experiences.
              </p>
            </div>

            <div className="grid grid--3-col gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                  SJ
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  Sarah Johnson
                </h3>
                <p className="text-orange-600 mb-2">
                  Founder & Flavour Director
                </p>
                <p className="text-amber-800 text-sm">
                  Former pastry chef with 15+ years creating unforgettable
                  flavours
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                  MC
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  Michael Chen
                </h3>
                <p className="text-orange-600 mb-2">Production Manager</p>
                <p className="text-amber-800 text-sm">
                  Expert in small-batch production and quality control
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                  ER
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  Emily Rodriguez
                </h3>
                <p className="text-orange-600 mb-2">Flavour Development</p>
                <p className="text-amber-800 text-sm">
                  Creative force behind our innovative flavour combinations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                How We Craft Our Flavours
              </h2>
              <p className="text-xl text-amber-800 max-w-3xl mx-auto">
                Every batch is carefully crafted using traditional methods and
                modern techniques to ensure consistent, exceptional quality.
              </p>
            </div>

            <div className="grid grid--4-col gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">
                  Source
                </h3>
                <p className="text-amber-800 text-sm">
                  We carefully select the finest natural ingredients from
                  trusted suppliers
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">
                  Craft
                </h3>
                <p className="text-amber-800 text-sm">
                  Each flavour is developed using time-tested techniques and
                  modern innovation
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">
                  Test
                </h3>
                <p className="text-amber-800 text-sm">
                  Every batch undergoes rigorous testing to ensure perfect
                  flavour balance
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">
                  Deliver
                </h3>
                <p className="text-amber-800 text-sm">
                  We package and ship your flavours with care, ready to elevate
                  your creations
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
