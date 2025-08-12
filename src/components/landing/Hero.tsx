import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-delivery.jpg";

const Hero = () => {
  const [spot, setSpot] = useState<{ x: number; y: number }>({ x: -500, y: -500 });

  return (
    <section
      aria-label="Hero"
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setSpot({ x: -500, y: -500 })}
      className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--background))]"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity"
        style={{
          background: `radial-gradient(600px 300px at ${spot.x}px ${spot.y}px, hsl(var(--primary) / 0.18), transparent 70%)`,
        }}
      />

      <div className="container relative grid gap-10 py-20 md:grid-cols-2 md:py-28 lg:py-32">
        <div className="flex flex-col items-start justify-center gap-6">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Dandona Delivery Services
          </h1>
          <p className="max-w-prose text-lg text-foreground/80">
            Swift, secure, reliable. Book same‑day deliveries, track orders in real time, and get 24/7 support.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact">
              <Button variant="hero" size="xl">Book a Delivery</Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="lg">Explore Services</Button>
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="Courier riding a motorcycle delivering packages across a city skyline"
            className="w-full rounded-xl border border-border shadow-[var(--shadow-elegant)]"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
