
const About = () => {
  return (
    <section id="about" className="py-20 bg-theme-sand/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              A Legacy of Excellence in Global Trade
            </h2>
            <p className="text-primary/70 leading-relaxed">
              GIWA MEGA CONCEPT COMPANY LTD is a multifaceted enterprise
              specializing in distribution, manufacturing, and international trade.
              Based in Lagos, Nigeria, we've built a reputation for connecting
              quality products with discerning markets.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <Stat number="2+" label="Business Locations" />
              <Stat
                number="100+"
                label="Products Distributed"
              />
            </div>
          </div>
          
          <div className="lg:pl-12">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                <img
                  src="/placeholder.svg"
                  alt="GIWA MEGA operations"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-theme-gold/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ number, label }: { number: string; label: string }) => (
  <div className="glass-card rounded-lg p-4">
    <div className="text-2xl font-bold text-primary">{number}</div>
    <div className="text-sm text-primary/70">{label}</div>
  </div>
);

export default About;
