import Gallery from "@/components/Gallery";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhatMatters from "@/components/Whatmatters";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Help/>
    <Gallery/>
    <WhatMatters/>
    </>
  );
}
