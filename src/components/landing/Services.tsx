import { Rocket, MapPin, Headphones } from "lucide-react";

const Feature = ({
  Icon,
  title,
  desc,
}: {
  Icon: React.ComponentType<any>;
  title: string;
  desc: string;
}) => (
  <div className="rounded-xl bg-primary/90 p-6 text-primary-foreground shadow-[var(--shadow-elegant)]">
    <Icon className="mb-4" />
    <h3 className="mb-1 text-xl font-semibold">{title}</h3>
    <p className="text-sm/6 opacity-90">{desc}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="bg-card text-card-foreground">
      <div className="container py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Our Services</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Feature
            Icon={Rocket}
            title="Fast Delivery"
            desc="Same‑day and next‑day options across the city—speed without compromise."
          />
          <Feature
            Icon={MapPin}
            title="Order Tracking"
            desc="Live GPS tracking and instant status updates from pickup to drop‑off."
          />
          <Feature
            Icon={Headphones}
            title="24/7 Support"
            desc="Real people ready to help any time—phone, chat, or email."
          />
        </div>

        <div id="about" className="mx-auto mt-14 max-w-3xl text-center">
          <h3 className="mb-3 text-2xl font-bold">About Us</h3>
          <p className="text-foreground/80">
            We are a customer‑first courier team committed to fast, secure, and reliable
            deliveries. Our trusted riders and smart routing ensure your packages arrive
            safely—on time, every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
