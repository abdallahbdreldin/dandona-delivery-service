const Footer = () => {
  const year = new Date().getFullYear();
  const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border bg-background/80">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <div className="text-sm text-foreground/70">© {year} Dandona Delivery Services</div>
        <nav className="flex flex-wrap items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground/80 hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
