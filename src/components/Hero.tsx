
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-theme-sand/20 to-transparent" />
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in opacity-0 [animation-delay:0.3s]">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              Welcome to Excellence
            </span>
          </div>
          
          <h1 className="mt-8 text-4xl md:text-6xl font-bold leading-tight animate-fade-in opacity-0 [animation-delay:0.5s]">
            Connecting Quality Products
            <br /> to Global Markets
          </h1>
          
          <p className="mt-6 text-lg text-primary/80 max-w-2xl mx-auto animate-fade-in opacity-0 [animation-delay:0.7s]">
            GIWA MEGA CONCEPT COMPANY LTD - Your trusted partner in distribution,
            manufacturing, and international trade
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in opacity-0 [animation-delay:0.9s]">
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 group">
              Explore Our Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="px-8 py-3 border border-primary/20 text-primary rounded-lg hover:bg-primary/5 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
