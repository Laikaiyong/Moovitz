import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import { ArchitectureBeam } from "@/components/custom/home/architecture";
import ShinyButtonDemo from "@/components/example/shiny-button-demo";

export default function LandingPage() {
  return (
    <>
      <div className="">
        {/* Hero Section */}
        <section id="hero">
          <ShinyButtonDemo />
        </section>
        {/* About Moovit */}
        <section>
        </section>
        {/* Features */}
        <section>

        </section>
        {/* How it Works */}
        <section>
          <ArchitectureBeam />
        </section>
        {/* Call to Action */}
        <section>

        </section>
      </div>
    </>
  )
}