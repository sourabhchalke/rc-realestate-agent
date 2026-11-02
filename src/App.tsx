import About from "./components/About";
import Areas from "./components/Areas";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Properties from "./components/Properties";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-ink-950 focus:px-5 focus:py-2.5 focus:text-[12px] focus:font-semibold focus:text-cream-50"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <Properties />
        <About />
        <Process />
        <Areas />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
