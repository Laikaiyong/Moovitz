import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import { ArchitectureBeam } from "@/components/custom/home/architecture";

export default function LandingPage() {
  return (
    <>
      <div className="">
        <Navbar />
        {/* Hero Section */}
        <section id="hero">
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
        <Footer />
      </div>
    </>
  )
}