import Link from 'next/link';
import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';

const dirContent = fs.readdirSync("content");
const blogs = dirContent.map(file => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data, content } = matter(fileContent);
//   console.log(data); // Add this line to log the data for each file
  return {...data, content};
});



// const blogs = [
//   {
//     id: 1,
//     title: "Mastering React in 2025",
//     description: "A complete guide to mastering React with modern tools and practices.",
//     image: "https://sdmntprwestus2.oaiusercontent.com/files/00000000-2488-61f8-9c54-b0610ee821d3/raw?se=2025-04-20T21%3A55%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=76c5bcc4-8869-5723-bb00-72114e3437bc&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-20T17%3A28%3A20Z&ske=2025-04-21T17%3A28%3A20Z&sks=b&skv=2024-08-04&sig=PbxPLXV61UeW6/BLoCbPGcPQ42XD1d1Ya8hBOnJS7/0%3D",
//     date: "April 20, 2025",
//     author: "Raj Mehta",
//     slug: "mastering-react-in-2025",
//   },
//   {
//     id: 2,
//     title: "Understanding Async/Await",
//     description: "Get to know how JavaScript handles asynchronous code like a pro.",
//     image: "https://miro.medium.com/v2/resize:fit:1200/1*m7hbXwbrqYMjnOSqhiIavw.jpeg",
//     date: "April 15, 2025",
//     author: "Priya Sharma",
//     slug: "understanding-async-await",
//   },
//   {
//     id: 3,
//     title: "Tailwind vs Bootstrap",
//     description: "A deep dive comparison between Tailwind CSS and Bootstrap for frontend development.",
//     image: "https://www.w3sniff.com/common/article/bootstrap-vs-tailwindcss1.png",
//     date: "April 10, 2025",
//     author: "Aman Kumar",
//     slug: "tailwind-vs-bootstrap",
//   },
// ];

const BlogPage = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center  mb-12">
          Latest Blog Posts
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className=" rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-50"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 p-2 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold  mb-2">
                  {blog.title}
                </h3>
                <p className=" mb-4 line-clamp-3">
                  {blog.description}
                </p>
                <div className="flex items-center justify-between text-sm  mb-4">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

