
const Footer = () => {
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
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Distribution</FooterLink>
              <FooterLink href="#">Manufacturing</FooterLink>
              <FooterLink href="#">Import/Export</FooterLink>
              <FooterLink href="#">Retail</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary/70">
              <li>Surulere, Lagos, Nigeria</li>
              <li>Contact number placeholder</li>
              <li>Email placeholder</li>
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

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="text-sm text-primary/70 hover:text-primary transition-colors"
    >
      {children}
    </a>
  </li>
);

export default Footer;
