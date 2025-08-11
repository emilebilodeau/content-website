import Link from "next/link";

export default function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways to Elevate Your Morning Coffee with Our Syrups",
      excerpt:
        "Transform your daily coffee routine with these creative ways to use our premium syrups. From classic vanilla to exotic flavours.",
      author: "Chef Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Coffee & Beverages",
      image: "/api/placeholder/400/250",
    },
    {
      id: 2,
      title: "Baking with Extracts: Tips for Maximum Flavour",
      excerpt:
        "Learn the secrets to getting the most flavour from your extracts in baking. Discover techniques that professional bakers use.",
      author: "Emily Rodriguez",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Baking Tips",
      image: "/api/placeholder/400/250",
    },
    {
      id: 3,
      title: "Craft Cocktails: Using Our Syrups Like a Pro",
      excerpt:
        "Master the art of cocktail making with our premium syrups. Recipes and techniques from award-winning bartenders.",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Cocktails",
      image: "/api/placeholder/400/250",
    },
  ];

  return (
    <section className="py-20 bg-[#1a1d3a]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-bold text-white mb-6">Flavour Inspiration</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Discover creative ways to use our extracts and syrups, from baking
            tips to cocktail recipes and everything in between.
          </p>
        </div>

        <div className="grid grid--3-col gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-[#080a20] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group animate-fade-in border border-[#2a2d4a]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full h-48 bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
                <div className="text-blue-300 text-sm font-medium">
                  Recipe Image
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block bg-blue-900 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </div>
                <h3 className="font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="btn btn-secondary text-lg px-8 py-4 inline-flex items-center"
          >
            View All Recipes
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
        </div>
      </div>
    </section>
  );
}
