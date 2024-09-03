'use client';

import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import { ArchitectureBeam } from "@/components/custom/Architecture";
import BentoDemo from "@/components/example/bento-demo";
import { AuroraBackgroundDemo } from "@/components/aeternity/example/aurora-background";
import { SiSolana } from "react-icons/si";

export default function LandingPage() {
  return (
    <>
      <div className="">
        <Navbar />
        {/* Hero Section */}
        <section id="hero">
          <AuroraBackgroundDemo></AuroraBackgroundDemo>
        </section>

        {/* About Moovit */}
        <section id="aboutUs" className="px-4 lg:px-10 text-center py-[80px]">
          <h1 className="text-3xl font-semibold">What is Moovitz?</h1>
          <p className="text-lg lg:text-2xl lg:w-[800px] mx-auto pt-6">
            Moovitz aims to ensure the <span className="font-semibold text-blue-500">transparency</span> of public transport <span className="font-semibold text-blue-500">fund collections</span> and project prioritization together with the government. With Moovitz, people are able to contribute and in a sense <span className="font-semibold text-blue-500">&rdquo;vote&rdquo;</span> which projects should be engaged first.
          </p>
        </section>
        {/* Features */}
        <section id="features" className="m-12">
          <BentoDemo></BentoDemo>
        </section>
        {/* How it Works */}
        <section id="howItWorks" className="px-4 lg:px-20 py-[50px] lg:py-[100pxcd] flex flex-col lg:flex-row">
          <div className="flex-1">
            <h2 className="text-xl lg:text-2xl font-semibold text-center lg:text-start">How Moovitz Works</h2>
            <p className="text-md lg:text-lg pt-6 w-full lg:w-[550px]">
              At Moovitz, we built on <span className="font-semibold"><a href="https://www.solana.com/" target="_blank">Solana <SiSolana className="inline"/></a></span> to create a seamless platform for transparent fund collection. By adopting Solana, we are able to create a platform that is the best of both worlds.
            </p>
          </div>
          <div className="flex-1 lg:ml-8 mt-6 lg:mt-0">
            <ArchitectureBeam />
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
