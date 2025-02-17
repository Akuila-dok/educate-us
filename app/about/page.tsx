"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page starts at top on load
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r mt-10 from-blue-50 to-green-50 font-ubuntu py-16 px-6 lg:px-12">
        
        {/* Who We Are Section */}
        <section id="who-we-are" className="max-w-3xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Who We Are
          </h3>
          <p className="text-xl text-gray-600 text-center leading-relaxed">
            <span className="font-bold text-blue-600">Educate Us Initiative</span> is a community-based organization in <span className="text-gray-500 text-2xl "><b>Kakuma Refugee Camp </b></span>dedicated to empowering individuals through education and skills development. Our goal is to create an inclusive society where knowledge and opportunities are accessible to all, fostering a brighter future for everyone.
          </p>
        </section>

        {/* Our Activities Section */}
        <section id="activities" className="max-w-4xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Our Activities
          </h3>
          <ul className="text-xl text-gray-600 leading-relaxed space-y-4">
            <li>✅ Promoting peacebuilding and conflict resolution.</li>
            <li>✅ Providing mentorship and leadership programs for youth.</li>
            <li>✅ Advocating for gender equality and social inclusivity.</li>
            <li>✅ Creating opportunities for talent development in arts and sports.</li>
          </ul>
        </section>

        {/* Mission, Vision, Objectives Section */}
        <section id="mission-vision" className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Mission, Vision & Objectives
          </h3>

          {/* Vision */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h4 className="text-2xl font-bold text-green-600 mb-2">🌍 Vision</h4>
            <p className="text-xl text-gray-600 leading-relaxed">
              To re-create a living society where an individual has profitable knowledge and skills to benefit the society.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h4 className="text-2xl font-bold text-blue-600 mb-2">🎯 Mission</h4>
            <p className="text-xl text-gray-600 leading-relaxed">
              To transform and empower communities for access to education, ensuring that every individual regardless of background, gender, location, or race has equal learning opportunities.
            </p>
          </div>

          {/* Objectives */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-2xl font-bold text-red-600 mb-2">🔭 Objectives</h4>
            <ul className="text-xl text-gray-600 leading-relaxed space-y-2">
              <li>✔️ To fight against gender-based inequality.</li>
              <li>✔️ To promote peacebuilding.</li>
              <li>✔️ To provide financial access.</li>
            </ul>
          </div>
          <p className="text-2xl text-gray-500 mt-24">If you could spare a dollar, 5 bucks, 10 bucks or even 100 dollars, you have put a smile on the face of a refugee in Kakuma Refugee Camp.</p>
        </section>

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
      <Footer />
    </>
  );
}

export default About;
