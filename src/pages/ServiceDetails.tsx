
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </button>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-8">
              <h1 className="text-3xl font-bold mb-6">{service.title}</h1>
              <div className="prose max-w-none text-primary/70">
                {service.content}
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="glass-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-primary/70">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const services = [
  {
    id: "distribution",
    title: "Distribution Services",
    content: "Our distribution network ensures efficient delivery of products across Nigeria and beyond. We maintain strong relationships with retailers and wholesalers to provide comprehensive coverage.",
    features: [
      {
        title: "Nationwide Coverage",
        description: "Strategic distribution points across major cities"
      },
      {
        title: "Quality Assurance",
        description: "Strict quality control throughout the distribution chain"
      },
      {
        title: "Timely Delivery",
        description: "Efficient logistics for prompt delivery"
      },
      {
        title: "Inventory Management",
        description: "Advanced tracking and management systems"
      }
    ]
  },
  {
    id: "manufacturing",
    title: "Manufacturing Excellence",
    content: "We partner with leading manufacturers to ensure high-quality production standards and consistent product quality.",
    features: [
      {
        title: "Quality Control",
        description: "Rigorous quality assurance processes"
      },
      {
        title: "Modern Facilities",
        description: "State-of-the-art manufacturing equipment"
      },
      {
        title: "Innovation",
        description: "Continuous improvement in processes"
      },
      {
        title: "Sustainability",
        description: "Environmentally conscious manufacturing"
      }
    ]
  },
  {
    id: "import-export",
    title: "Import/Export Solutions",
    content: "Our international trade services connect quality products with global markets, ensuring smooth customs clearance and logistics.",
    features: [
      {
        title: "Global Network",
        description: "Established international partnerships"
      },
      {
        title: "Customs Expertise",
        description: "Efficient customs clearance processes"
      },
      {
        title: "Documentation",
        description: "Complete handling of trade documentation"
      },
      {
        title: "Market Access",
        description: "Opening doors to new markets"
      }
    ]
  },
  {
    id: "retail",
    title: "Retail Services",
    content: "Direct-to-consumer sales through strategic retail locations and partnerships.",
    features: [
      {
        title: "Store Network",
        description: "Strategic retail locations nationwide"
      },
      {
        title: "Product Display",
        description: "Attractive merchandising solutions"
      },
      {
        title: "Customer Service",
        description: "Dedicated support for retailers"
      },
      {
        title: "Market Analysis",
        description: "Regular market research and analysis"
      }
    ]
  }
];

export default ServiceDetails;
