const Captions = () => {
  return (
    <section id="highlights" className="bg-card text-card-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-border bg-background p-6 shadow-sm">
            <p className="text-foreground/90">
              DanDona Delivery Services is the UAE’s most trusted name in fast, reliable, and professional last-mile delivery.
            </p>
          </article>
          <article className="rounded-xl border border-border bg-background p-6 shadow-sm">
            <p className="text-foreground/90">
              Trusted by Talabat, Careem, Noon, and Deliveroo, we deliver with unmatched speed, cleanliness, and care.
            </p>
          </article>
          <article className="rounded-xl border border-border bg-background p-6 shadow-sm">
            <p className="text-foreground/90">
              Our elite riders are trained to represent your brand at its best — every order, every time.
            </p>
          </article>
        </div>
        <p className="mt-8 text-center text-xl font-semibold text-foreground">Your success, delivered.</p>
      </div>
    </section>
  );
};

export default Captions;
