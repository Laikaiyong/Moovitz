import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import { ArchitectureBeam } from "@/components/custom/Architecture";

export default function LandingPage() {
  return (
    <>
      <div className="">
        <Navbar />
        {/* Hero Section */}
        <section id="hero" className="px-4 lg:px-10">

        </section>

        {/* About Moovit */}
        <section id="aboutUs" className="px-4 lg:px-10 text-center py-[80px]">
          <h1 className="text-3xl font-semibold">What is Moovit?</h1>
          <p className="text-lg lg:w-[800px] mx-auto pt-6">
            Moovit aims to ensure the transparency of public transport fund collections and project prioritization together with the government. With Moovit, people are able to contribute and in a sense &rdquo;vote&rdquo; which projects should be engaged first.
          </p>
        </section>
        {/* Features */}
        <section>

        </section>
        {/* How it Works */}
        <section id="howItWorks " className="px-4 lg:px-20 flex py-[100px]">
          <div>
            <h2 className="text-2xl font-semibold">How Moovit Works</h2>
            <p className="text-lg pt-6 w-[550px]">
              At Moovit, we integrated <span className="font-semibold"><a href="https://www.maschain.com/" target="_blank">Maschain</a></span> and <span className="font-semibold"><a href="https://sui.io/" target="_blank">Sui</a></span> to create a seamless platform for transparent fund collection. Adopting both these technologies, we are able to create a platform that is the best of both worlds.
            </p>
          </div>
          <ArchitectureBeam />
        </section>

        {/* Call to Action */}
        <section>
        
        </section>
        <Footer />
      </div>
    </>
  )
}