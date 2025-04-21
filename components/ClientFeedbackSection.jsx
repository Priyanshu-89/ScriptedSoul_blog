import React from "react";

const testimonials = [
    {
        name: "Aarav Mehta",
        feedback: "This platform transformed the way we work. Excellent support and beautifully designed!",
        position: "CEO, TechNova"
    },
    {
        name: "Sneha Sharma",
        feedback: "The user experience is fantastic! Highly recommend to anyone looking to grow their business.",
        position: "Product Manager, Creatix"
    },
    {
        name: "Rohit Kumar",
        feedback: "I love how simple and powerful the tools are. Worth every penny!",
        position: "Founder, DevHub"
    }
];

const ClientFeedbackSection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-background transition-colors duration-300">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">What Our Clients Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                        key={index}
                        className={`bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 opacity-100`} // Temporarily testing with opacity-100
                      >
                        <p className="text-lg text-gray-700 dark:text-muted-foreground mb-4 italic">"{testimonial.feedback}"</p>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                        <span className="text-sm text-gray-500 dark:text-muted-foreground">{testimonial.position}</span>
                      </div>
                      
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientFeedbackSection;
