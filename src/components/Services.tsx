
import { Package2, Factory, Globe, ShoppingCart } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
            Our Services
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold">
            Comprehensive Business Solutions
          </h2>
          <p className="mt-4 text-primary/70">
            We offer a wide range of services to meet your business needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Package2 className="w-6 h-6" />}
            title="Distribution"
            description="Strategic distribution networks ensuring product reach and market presence"
          />
          <ServiceCard
            icon={<Factory className="w-6 h-6" />}
            title="Manufacturing"
            description="Quality manufacturing processes with attention to detail"
          />
          <ServiceCard
            icon={<Globe className="w-6 h-6" />}
            title="Import/Export"
            description="Global trade solutions connecting markets worldwide"
          />
          <ServiceCard
            icon={<ShoppingCart className="w-6 h-6" />}
            title="Retail"
            description="Direct-to-consumer sales through strategic retail locations"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:translate-y-[-4px]">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-primary/70">{description}</p>
  </div>
);

export default Services;
