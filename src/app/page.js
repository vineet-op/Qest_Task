
import Hero from "../app/pages/Hero";
import About from "./pages/About";
import Download from "./pages/Download";
import Faq from "./pages/Faq";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
// import Home from "../app/pages/Hero"

export default function Home() {
  return (

    <>
      <Hero />
      <About />
      <Features />
      <Services />
      <Pricing />
      <Download />
      <Faq />
    </>

  );
}
