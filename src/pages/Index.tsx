
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Products from "../components/Products";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
