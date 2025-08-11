export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Chef Sarah Johnson",
      role: "Executive Chef, Farmhouse Kitchen",
      content:
        "These extracts have transformed our desserts. The vanilla is so pure and the citrus extracts add incredible depth to our pastries.",
      avatar: "SJ",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Bar Manager, Craft Cocktail Bar",
      content:
        "Our cocktails have never tasted better. The syrups are perfectly balanced and the flavours are incredibly bold and authentic.",
      avatar: "MC",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Home Baker & Food Blogger",
      content:
        "As someone who's passionate about quality ingredients, these extracts have become essential in my kitchen. The difference is remarkable.",
      avatar: "ER",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Coffee Shop Owner, Brew & Bean",
      content:
        "Our lattes and specialty drinks have been elevated to a whole new level. Customers can't get enough of our flavoured beverages.",
      avatar: "DT",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-amber-400" : "text-amber-200"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-amber-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what chefs, bartenders, and
            home cooks have to say about our premium extracts and syrups.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid--2-col gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

              {/* Content */}
              <blockquote className="text-lg text-amber-800 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-amber-900">
                    {testimonial.name}
                  </div>
                  <div className="text-amber-700 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-amber-900 mb-6">
              Trusted by Culinary Professionals
            </h3>
            <div className="grid grid--4-col items-center gap-8">
              <div className="text-amber-600 font-semibold text-lg">
                Restaurants
              </div>
              <div className="text-amber-600 font-semibold text-lg">
                Bakeries
              </div>
              <div className="text-amber-600 font-semibold text-lg">
                Coffee Shops
              </div>
              <div className="text-amber-600 font-semibold text-lg">
                Home Chefs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
