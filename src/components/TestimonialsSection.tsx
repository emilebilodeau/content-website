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
        className={`w-5 h-5 ${i < rating ? "text-blue-400" : "text-gray-600"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-[#080a20]">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-bold text-white mb-6">What Our Customers Say</h2>
          <p className="text-gray-300">
            Don't just take our word for it. Here's what chefs, bartenders, and
            home cooks have to say about our premium extracts and syrups.
          </p>
        </div>

        <div className="grid grid--2-col gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1a1d3a] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in border border-[#2a2d4a]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-xl">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#1a1d3a] rounded-2xl p-8 shadow-lg border border-[#2a2d4a]">
            <h3 className="font-semibold text-white mb-6">
              Trusted by Culinary Professionals
            </h3>
            <div className="grid grid--4-col items-center gap-8">
              <div className="text-blue-400 font-semibold text-3xl">
                Restaurants
              </div>
              <div className="text-blue-400 font-semibold text-3xl">
                Bakeries
              </div>
              <div className="text-blue-400 font-semibold text-3xl">
                Coffee Shops
              </div>
              <div className="text-blue-400 font-semibold text-3xl">
                Home Chefs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
