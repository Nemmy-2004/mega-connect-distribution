
const Footer = () => {
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-primary/5 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">GIWA MEGA</h3>
            <p className="text-primary/70 text-sm">
              Connecting quality products to global markets with excellence and reliability.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink onClick={() => handleScroll("home")}>Home</FooterLink>
              <FooterLink onClick={() => handleScroll("about")}>About</FooterLink>
              <FooterLink onClick={() => handleScroll("services")}>Services</FooterLink>
              <FooterLink onClick={() => handleScroll("contact")}>Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <FooterLink onClick={() => handleScroll("services")}>Distribution</FooterLink>
              <FooterLink onClick={() => handleScroll("services")}>Manufacturing</FooterLink>
              <FooterLink onClick={() => handleScroll("services")}>Import/Export</FooterLink>
              <FooterLink onClick={() => handleScroll("services")}>Retail</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary/70">
              <li>Surulere, Lagos, Nigeria</li>
              <li>+234 123 456 7890</li>
              <li>info@giwamega.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-sm text-primary/60">
          <p>© {new Date().getFullYear()} GIWA MEGA CONCEPT COMPANY LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ 
  onClick, 
  children 
}: { 
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <li>
    <button
      onClick={onClick}
      className="text-sm text-primary/70 hover:text-primary transition-colors cursor-pointer"
    >
      {children}
    </button>
  </li>
);

export default Footer;
