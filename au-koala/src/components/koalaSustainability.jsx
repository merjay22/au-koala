// KoalaSustainability.jsx
import React from 'react';
import './KoalaSustainability.css';

const sustainabilityData = [
  {
    image: '//au.koala.com/cdn/shop/files/Image_Placeholder_3-1.jpg?v=1726643084&width=2500',
    title: 'We are a part of 1% for the Planet',
    description: `We put our money where our mouth is. We were the first Australian mattress and furniture retailer to join the 1% for the Planet movement. This means we donate one percent of sales annually for the good of our people and planet. In the last three years, we’ve given over $6.5M in cash and product to certified environmental partners.`,
  },
  {
    image: '//au.koala.com/cdn/shop/files/Image_Placeholder_4.jpg?v=1726643084&width=2500',
    title: "We're proudly a B Corp",
    description: `We're proud to be B Corp certified, which means we meet high standards of social and environmental impact, transparency and accountability. This certification reflects our commitment to using our business a force for good.`,
  },
  {
    image: '//au.koala.com/cdn/shop/files/Image_Placeholder_3.jpg?v=1726643084&width=2500',
    title: 'Protecting our Aussie icon',
    description: `In partnership with WWF-Australia since 2017, we are working together to prevent the further decline of koala populations by restoring and reducing the loss of habitat and supporting key interventions required for sick and injured koalas.`,
  },
];

const KoalaSustainability = () => {
  return (
    <section className="px-6 py-16 bg-white text-black">
      {/* Added section label */}
      <div className="text-center mb-2">
        <p className="text-sm font-semibold text-gray-500">Why Koala?</p>
      </div>

      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        We’re in the business of making things good
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {sustainabilityData.map((item, index) => (
          <div key={index} className="flex flex-col items-start">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-xl w-full object-cover mb-6 h-60"
            />
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-700 text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KoalaSustainability;
