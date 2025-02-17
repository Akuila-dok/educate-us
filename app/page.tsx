import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhatMatters from "@/components/Whatmatters";
import YourHelpMatters from "@/components/YourHelpMatters";

export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-r mb-14 from-blue-50 to-green-50 ">
    <Navbar/>
    <Hero/>
    <Help/>
    <Gallery/>
    <YourHelpMatters/>
    <WhatMatters/>
    <Footer/>
    </div>
    
    </>
  );
}
