// app/about/page.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <main className="min-h-screen  px-6 py-12 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to our website! We are passionate developers dedicated to building fast, responsive,
          and user-friendly web applications. Our mission is to create high-quality digital experiences
          that solve real-world problems.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
          <p>
            We specialize in modern web technologies like React, Next.js, Tailwind CSS, and more.
            Whether it’s a static portfolio or a complex web platform, we bring ideas to life with
            clean code and great design.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p>
            Our goal is to simplify the digital world, one project at a time. We value performance,
            accessibility, and innovation to ensure a delightful experience for all users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>
            Have questions or want to work together? Reach out via email at{' '}
            <a href="mailto:hello@example.com" className="text-blue-500 underline">
              hello@example.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
