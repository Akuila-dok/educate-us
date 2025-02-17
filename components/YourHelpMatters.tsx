"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

function YourHelpMatters() {
  const impactAreas = [
    {
      title: "Empowering the Youth",
      description:
        "Your donation helps us run mentorship programs, skill-building workshops, and leadership training to prepare young people for a brighter future.",
    },
    {
      title: "Promoting Peace & Inclusion",
      description:
        "We facilitate peacebuilding initiatives and advocacy programs that create harmonious communities free from conflict and discrimination.",
    },
    {
      title: "Supporting Education",
      description:
        "With your help, we provide scholarships, learning materials, and digital literacy training to students in underprivileged areas.",
    },
    {
      title: "Nurturing Talents",
      description:
        "Contributions enable us to create platforms for young artists, athletes, and musicians to showcase their skills and pursue their dreams.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-50 to-green-50 min-h-screen font-ubuntu py-16 px-6 lg:px-12">
        {/* Intro Section */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-wide">
          How Your Help Matters
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto text-2xl leading-relaxed mb-12">
          Every contribution, big or small, helps us transform lives. Your generosity fuels education, peacebuilding, and opportunities for the youth. 
          Join us in making a lasting impact!
        </p>

        {/* Impact Areas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {impactAreas.map((impact, index) => (
            <div key={index} className="flex items-start space-x-6">
              {/* Icon Placeholder (Use actual icons if needed) */}
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-green-600 text-white text-xl font-bold shadow-md">
                🌟
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {impact.title}
                </h3>
                <p className="text-gray-500 text-xl leading-relaxed">
                  {impact.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Donate Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.gofundme.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-green-500 text-green-500 text-xl font-bold px-8 py-2 rounded-lg shadow-md transition-all duration-300 hover:bg-green-500 hover:text-white hover:shadow-lg"
          >
            Donate Now
          </a>
        </div>
      </div>
    </>
  );
}

export default YourHelpMatters;
