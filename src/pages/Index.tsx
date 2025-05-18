
import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
import Journey from "@/components/Journey";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Proof />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
