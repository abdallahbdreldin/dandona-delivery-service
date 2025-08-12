import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/80 border-b border-border">
      <nav className="container flex items-center justify-between py-4">
        <a href="#" className="font-semibold tracking-tight text-lg">
          Dandona
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact">
            <Button variant="hero" size="sm">Get a Quote</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
