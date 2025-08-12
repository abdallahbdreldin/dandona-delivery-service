const Clients = () => {
  return (
    <section id="clients" className="bg-card text-card-foreground">
      <div className="container py-16 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <article>
            <h2 className="text-3xl font-bold md:text-4xl">Our Clients</h2>
            <p className="mt-4 text-foreground/80">We proudly work with:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-foreground/80">
              <li>Talabat</li>
              <li>Careem</li>
              <li>Noon</li>
              <li>Deliveroo</li>
              <li>InstaShop</li>
              <li>And many leading local businesses</li>
            </ul>
            <p className="mt-6 text-foreground/80">
              At DanDona Delivery Services, every delivery is more than a trip from point A to point B — it’s a reflection of your business and our reputation. That’s why we commit to being faster, cleaner, and more reliable than anyone else in the UAE.
            </p>
            <p className="mt-2 font-semibold text-foreground">Your success is our delivery — and we deliver nothing less than the best.</p>
          </article>
          <aside className="rounded-xl border border-border bg-background p-4">
            <img
              src="/lovable-uploads/95966c58-e28a-4f48-8ca1-d8a109fc0c9c.png"
              alt="Delivery partners in the UAE: Talabat, Careem, Noon, Deliveroo logos"
              className="w-full rounded-lg border border-border"
              loading="lazy"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Clients;
