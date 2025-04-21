import React from 'react';

const topBlogs = [
  {
    title: "How to Build a Modern Web App",
    excerpt: "Learn how to build modern web applications using the latest technologies like React and Tailwind CSS.",
    url: "#",
    image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1687693044/catalog/1672919682470297600/mfgokl64sfwsbn1eqf4v.jpg",
  },
  {
    title: "Understanding JavaScript Closures",
    excerpt: "A deep dive into closures in JavaScript and how they work under the hood.",
    url: "#",
    image: "https://miro.medium.com/max/1400/1*kZL6-d4knjWOzpOr0D1pcQ.jpeg",
  },
  {
    title: "The Ultimate Guide to CSS Grid",
    excerpt: "Master CSS Grid with this ultimate guide that covers all the essential concepts and advanced techniques.",
    url: "#",
    image: "https://i.pinimg.com/originals/19/af/56/19af56c7c854d3f273dbc12b156e4c97.png",
  },
];

const TopBlogsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">Top Blogs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {topBlogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 transform"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{blog.title}</h4>
              <p className="text-gray-700 dark:text-muted-foreground mb-4">{blog.excerpt}</p>
              <a
                href={blog.url}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBlogsSection;
