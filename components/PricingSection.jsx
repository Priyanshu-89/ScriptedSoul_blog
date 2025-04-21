import React from "react";

const PricingSection = () => {
  const tiers = [
    {
      title: "Basic",
      price: "$10/mo",
      features: ["1 Project", "Basic Support", "Access to Blog"]
    },
    {
      title: "Pro",
      price: "$29/mo",
      features: ["10 Projects", "Priority Support", "Access to Blog & Newsletter"],
      featured: true
    },
    {
      title: "Enterprise",
      price: "$99/mo",
      features: ["Unlimited Projects", "24/7 Support", "Personalized Consulting"]
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-foreground mb-10">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`
                rounded-xl p-6 shadow-md transition-transform  hover:scale-105 border duration-300
                ${
                  tier.featured
                    ? "bg-blue-400 text-white border-blue-300 dark:bg-blue-900 dark:text-white"
                    : "bg-white text-gray-900 border-gray-200 dark:bg-card dark:text-card-foreground dark:border-border"
                }
              `}
            >
              <h3 className="text-2xl font-semibold mb-2">{tier.title}</h3>
              <p className="text-3xl font-bold mb-4">{tier.price}</p>
              <ul className="text-left mb-6 space-y-2">
                {tier.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
              <button
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-300
                  ${
                    tier.featured
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted/80"
                  }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
