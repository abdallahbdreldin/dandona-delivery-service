import { ClipboardCheck, LocateFixed, Package } from "lucide-react";

const Step = ({
  Icon,
  title,
  desc,
}: {
  Icon: React.ComponentType<any>;
  title: string;
  desc: string;
}) => (
  <div className="rounded-xl border border-border bg-secondary p-6 text-secondary-foreground shadow-sm">
    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
      <Icon className="size-5" />
    </div>
    <h3 className="mb-1 text-lg font-semibold">{title}</h3>
    <p className="text-sm/6 text-foreground/80">{desc}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--secondary))]">
      <div className="container py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold md:text-4xl">How It Works</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Step Icon={ClipboardCheck} title="Place an Order" desc="Tell us where to pick up and drop off—get an instant quote." />
          <Step Icon={LocateFixed} title="Track Your Order" desc="Watch your courier move in real time, minute by minute." />
          <Step Icon={Package} title="Receive Your Package" desc="On‑time delivery with photo proof and signature capture." />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
