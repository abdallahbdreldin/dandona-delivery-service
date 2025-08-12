const Gallery = () => {
  return (
    <section id="gallery" className="bg-background">
      <div className="container py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold md:text-4xl text-foreground">Portfolio</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-foreground/80">
          A glimpse of DanDona Delivery Services — brand visuals and rider excellence.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <figure className="overflow-hidden rounded-xl border border-border bg-card">
            <img src="/lovable-uploads/2c162131-cac1-4945-a573-2669bc722478.png" alt="DanDona rider illustration on scooter in UAE city at night" className="h-full w-full object-cover" loading="lazy" />
          </figure>
          <figure className="overflow-hidden rounded-xl border border-border bg-card">
            <img src="/lovable-uploads/5d3e8b92-51c7-46c5-8858-0416fd857f77.png" alt="DanDona delivery services poster with riders and landmarks" className="h-full w-full object-cover" loading="lazy" />
          </figure>
          <figure className="overflow-hidden rounded-xl border border-border bg-card">
            <img src="/lovable-uploads/a043c4d1-50db-4267-9790-7e626b024f6a.png" alt="Premium DanDona delivery services poster showcasing speed and reliability" className="h-full w-full object-cover" loading="lazy" />
          </figure>
          <figure className="overflow-hidden rounded-xl border border-border bg-card">
            <img src="/lovable-uploads/dd7ff971-1fb5-410c-aec9-eaac13745ee8.png" alt="3D gold DanDona Delivery Services logo" className="h-full w-full object-cover" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
