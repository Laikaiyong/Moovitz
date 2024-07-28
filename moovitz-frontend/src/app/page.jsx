import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import { ArchitectureBeam } from "@/components/custom/Architecture";
import BentoDemo from "@/components/example/bento-demo";
import { AuroraBackgroundDemo } from "@/components/aeternity/example/aurora-background";

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
          <h1 className="text-3xl font-semibold">What is Moovit?</h1>
          <p className="text-lg lg:text-2xl lg:w-[800px] mx-auto pt-6">
            Moovit aims to ensure the <span className="font-semibold text-blue-500">transparency</span> of public transport <span className="font-semibold text-blue-500">fund collections</span> and project prioritization together with the government. With Moovit, people are able to contribute and in a sense <span className="font-semibold text-blue-500">&rdquo;vote&rdquo;</span> which projects should be engaged first.
          </p>
        </section>
        {/* Features */}
        <section className="m-12">
          <BentoDemo></BentoDemo>
        </section>
        {/* How it Works */}
        <section id="howItWorks" className="px-4 lg:px-20 py-[50px] lg:py-[100px] flex flex-col lg:flex-row">
          <div className="flex-1">
            <h2 className="text-xl lg:text-2xl font-semibold text-center lg:text-start">How Moovit Works</h2>
            <p className="text-md lg:text-lg pt-6 w-full lg:w-[550px]">
              At Moovit, we integrated <span className="font-semibold"><a href="https://www.maschain.com/" target="_blank">Maschain</a></span> and <span className="font-semibold"><a href="https://sui.io/" target="_blank">Sui</a></span> to create a seamless platform for transparent fund collection. Adopting both these technologies, we are able to create a platform that is the best of both worlds.
            </p>
          </div>
          <div className="flex-1 lg:ml-8 mt-6 lg:mt-0">
            <ArchitectureBeam />
          </div>
        </section>
        {/* Call to Action */}
        <section>

        </section>
        <Footer />
      </div>
    </>
  )
}
