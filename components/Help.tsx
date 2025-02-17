import React from "react";
import { Heart } from "lucide-react"; // Importing Love Icon

function Help() {
  // Color Variations
  const cardColors = [
    "bg-blue-50 border-blue-200 hover:shadow-blue-300",
    "bg-green-50 border-green-200 hover:shadow-green-300",
    "bg-yellow-50 border-yellow-200 hover:shadow-yellow-300",
    "bg-red-50 border-red-200 hover:shadow-red-300"
  ];

  return (
    <section className="w-full font-ubuntu bg-green-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Impact Statement */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-wide" style={{ fontFamily: "Ubuntu, sans-serif" }}>
          Your Donations Create Change
        </h2>
        <p className="mt-6 text-xl md:text-2xl text-gray-600 leading-relaxed">
          Every contribution to Educate Us Initiative fuels transformative programs in Kakuma. 
          Your support empowers <b>peacebuilding, gender equality, valiant arts, and mentorship</b>, 
          equipping refugees with the skills and opportunities to <b>rebuild their lives</b> independently.
        </p>

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              title: "Peacebuilding",
              description: "Creating harmony through conflict resolution and community-driven initiatives.",
              link: "https://www.gofundme.com/peacebuilding"
            },
            {
              title: "Gender Equality",
              description: "Empowering women and girls through education and leadership training.",
              link: "https://www.gofundme.com/gender-equality"
            },
            {
              title: "Valiant Arts",
              description: "Providing a creative platform for refugees to express themselves through arts and culture.",
              link: "https://www.gofundme.com/valiant-arts"
            },
            {
              title: "Mentorship",
              description: "Guiding youth and children toward education, self-sufficiency, and bright futures.",
              link: "https://www.gofundme.com/mentorship"
            }
          ].map((item, index) => (
            <div key={index} className={`p-8 shadow-lg rounded-xl border transition-transform transform hover:scale-105 hover:shadow-xl ${cardColors[index]}`}>
              {/* Title with Underline */}
              <h3 className="text-3xl font-bold text-blue-600 relative pb-2">
                {item.title}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
              </h3>
              
              {/* Description */}
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Donate Button with Love Icon */}
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center border border-blue-600 text-blue-600 text-lg px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                <Heart className="w-5 h-5 mr-2" /> Donate Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Help;
