import React from "react";

function Hero() {
  return (
    <section className="w-full font-ubuntu bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center min-h-[85vh] px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-5xl text-left md:text-center">
        {/* Main Heading */}
        <h1
          className="text-5xl mt-4 md:text-7xl font-extrabold tracking-wide text-gray-800"
          style={{ fontFamily: "Ubuntu, sans-serif", letterSpacing: "0.05em" }}
        >
          Empowering Refugees, Transforming Lives
        </h1>

        {/* Mission Statement */}
        <p
          className="mt-6 text-2xl md:text-3xl text-gray-600 leading-relaxed"
          style={{ letterSpacing: "0.03em" }}
        >
          <span className="text-blue-500"><b>Educate Us Initiative</b></span>, a Community Based Organization based in <span className="text-red-400"><b>Kakuma Refugee Camp</b></span>, is committed to fostering 
          self-sufficient refugees through structured programs that create 
          sustainable futures.
        </p>

        {/* Focus Areas with Bordered Circular Numbers */}
        <div className="mt-8 space-y-6">
          {[
            { number: "01", text: "Peacebuilding – Cultivating harmony and coexistence." },
            { number: "02", text: "Gender Equality – Breaking barriers and empowering women." },
            { number: "03", text: "Valiant Arts – Showcasing talent through creative expression." },
            { number: "04", text: "Youth & Child Mentorship – Building strong, self-sustaining futures." },
          ].map((item, index) => (
            <div key={index} className="flex items-start md:items-center space-x-4">
              {/* Bordered Circular Number */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-blue-600 text-blue-600 text-2xl md:text-3xl font-bold shadow-md bg-white aspect-w-1 aspect-h-1 flex-shrink-0">                {item.number}
              </div>
              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;
