
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
            Get in Touch
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold">
            Contact Us
          </h2>
          <p className="mt-4 text-primary/70">
            Reach out to us for any inquiries or business opportunities
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo
              icon={<MapPin className="w-5 h-5" />}
              title="Office Address"
              details={[
                "Shop A1005, The Main Tejuosho Shopping Complex",
                "Surulere, Lagos, Nigeria"
              ]}
            />
            <ContactInfo
              icon={<MapPin className="w-5 h-5" />}
              title="Registered Address"
              details={[
                "House 1, AI Close, Federal Low-Cost Estate",
                "Ikorodu, Lagos, Nigeria"
              ]}
            />
            <ContactInfo
              icon={<Phone className="w-5 h-5" />}
              title="Phone"
              details={["Contact number placeholder"]}
            />
            <ContactInfo
              icon={<Mail className="w-5 h-5" />}
              title="Email"
              details={["Email placeholder"]}
            />
          </div>

          <div className="glass-card rounded-xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-primary/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:outline-none focus:border-primary/30 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:outline-none focus:border-primary/30 transition-colors"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary/80 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:outline-none focus:border-primary/30 transition-colors min-h-[150px]"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({
  icon,
  title,
  details,
}: {
  icon: React.ReactNode;
  title: string;
  details: string[];
}) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-primary/70">
          {detail}
        </p>
      ))}
    </div>
  </div>
);

export default Contact;
