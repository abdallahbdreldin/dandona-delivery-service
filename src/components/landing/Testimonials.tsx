const Testimonials = () => {
  return (
    <section className="bg-card text-card-foreground">
      <div className="container py-16 md:py-24">
        <div className="grid items-stretch gap-8 md:grid-cols-2">
          <article className="rounded-xl border border-border bg-background p-8 shadow-[var(--shadow-elegant)]">
            <h3 className="mb-4 text-2xl font-bold">Testimonials</h3>
            <figure>
              <blockquote className="text-lg text-foreground/90">
                “Exceptional service—picked up in 20 minutes and delivered across town
                even faster. The live tracking is spot on.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">John Smith</span> — Operations Manager
              </figcaption>
            </figure>
          </article>

          <aside className="rounded-xl border border-border bg-background p-8">
            <h4 className="mb-2 text-xl font-semibold">Why businesses choose us</h4>
            <ul className="list-disc space-y-2 pl-5 text-foreground/80">
              <li>Account management and consolidated billing</li>
              <li>Photo proof, signatures, and delivery notes</li>
              <li>Trusted riders and strict safety protocols</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
