"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function Activities() {
  const activities = [
    {
      number: "1",
      title: "Peacebuilding & Conflict Resolution",
      description:
        "We empower communities with conflict resolution skills through training and workshops. By fostering dialogue and mutual understanding, we create a peaceful and harmonious environment where everyone thrives.",
    },
    {
      number: "2",
      title: "Youth Mentorship & Leadership",
      description:
        "Our mentorship programs focus on equipping young people with leadership skills, career guidance, and personal development. We believe in nurturing the next generation of leaders who will drive positive change. We offer programming/coding classes for children in the aim of making them better oriented with technology.",
    },
    {
      number: "3",
      title: "Gender Equality & Inclusivity",
      description:
        "We actively promote gender inclusivity by running campaigns, hosting discussions, and providing equal opportunities. Our mission is to create a society where everyone, regardless of gender, has an equal chance to succeed.",
    },
    {
      number: "4",
      title: "Arts, Sports & Talent Development",
      description:
        "Through arts, music, and sports, we provide a creative outlet for young people. Our programs help them discover and refine their talents while staying engaged in positive and productive activities.",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-r from-blue-50 to-green-50 mt-10 font-ubuntu py-16 px-6 lg:px-12">
      {/* Introductory Paragraph */}
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-wide">
        What We Do
      </h2>
      <p className="text-center text-gray-500 mb-36 max-w-3xl mx-auto text-2xl leading-relaxed">
        At <span className="font-bold text-blue-600">Educate Us Initiative</span>, we are dedicated to empowering communities through impactful programs. Our activities focus on peacebuilding, mentorship, gender equality, and talent development. Each initiative is designed to uplift, educate, and inspire change.
      </p>

      {/* Activities List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-6">
            {/* Number in Circle */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-blue-600 text-blue-600 text-2xl md:text-3xl font-bold shadow-md bg-white aspect-w-1 aspect-h-1 flex-shrink-0">            {activity.number}
            </div>

            {/* Activity Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-500 text-xl leading-relaxed">
                {activity.description}
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
<Footer/>
    </>
  );
}

export default Activities;
