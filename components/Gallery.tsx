"use client";
import React from "react";

function Gallery() {
  const galleryItems = [
    {
      title: "Peacebuilding Workshop",
      description: "Empowering communities through conflict resolution training.",
      image: "peacebuildingworkshop.jpeg",
    },
    {
      title: "Gender Equality Campaign",
      description: "Promoting inclusivity and equal opportunities for all.",
      image: "peacebuildingworkshop.jpeg",
    },
    {
      title: "Valiant Arts Showcase",
      description: "Celebrating creativity and talent within our community.",
      image: "peacebuildingworkshop.jpeg",
    },
    {
      title: "Youth Mentorship Program",
      description: "Guiding the next generation towards a brighter future.",
      image: "peacebuildingworkshop.jpeg",
    },
  ];

  return (
    <div className="bg-gradient-to-b font-ubuntu from-green-50 to-white py-16 px-6 lg:px-20">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-wide">
        A Glimpse of Our Impact
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
        Explore our gallery to witness the transformative work we do in the
        community. Each image tells a story of change, empowerment, and resilience.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={`/${item.image}`}
              alt={item.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-700 mt-3 text-md leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
