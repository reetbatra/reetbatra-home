import Footer from "@/components/Footer";
import Growth from "@/components/Growth";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Life from "@/components/Life";
import Nav from "@/components/Nav";
import Now from "@/components/Now";
import Reveal from "@/components/Reveal";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <How />
        <Work />
        <Growth />
        <Life />
        <Now />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
