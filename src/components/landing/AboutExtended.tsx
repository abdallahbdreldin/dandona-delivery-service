const AboutExtended = () => {
  return (
    <section id="about-us" className="bg-background text-foreground">
      <div className="container py-16 md:py-24">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">About Us</h2>
          <p className="mt-4 text-foreground/80">
            At DanDona Delivery Services, we don’t just deliver packages — we deliver excellence. Based in the UAE, we are the country’s most trusted name in fast, reliable, and professional last-mile delivery.
          </p>
          <p className="mt-3 text-foreground/80">
            Our success is built on precision, professionalism, and personal care. Every rider is trained to follow a strict sequence of service — from safe handling to courteous customer interaction — ensuring that every delivery represents your brand at its best.
          </p>
        </header>

        <section className="mx-auto mt-10 max-w-4xl">
          <h3 className="text-2xl font-semibold">Why We’re the UAE’s #1 Choice</h3>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground/80">
            <li>Elite, trained riders — skilled in speed, safety, and customer care.</li>
            <li>Unmatched professionalism — clean uniforms, neat presentation, and courteous service.</li>
            <li>Proven track record — trusted by industry leaders like Talabat, Careem, Noon, and Deliveroo.</li>
            <li>Nationwide reach — reliable delivery across all emirates.</li>
            <li>Partnership mindset — we treat your customers as our own.</li>
          </ul>
        </section>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-border bg-card p-6 text-card-foreground">
            <h4 className="mb-2 text-xl font-semibold">Local Business</h4>
            <p className="text-foreground/80">
              From restaurants and cafés to retail shops, we deliver with unmatched speed and professionalism. Every rider is trained to follow a precise sequence of service — ensuring orders are handled with care, presented neatly, and delivered on time. That’s why local businesses across the UAE trust DanDona to represent their brand.
            </p>
          </article>
          <article className="rounded-xl border border-border bg-card p-6 text-card-foreground">
            <h4 className="mb-2 text-xl font-semibold">Online Store</h4>
            <p className="text-foreground/80">
              Your customers expect fast, reliable delivery — and we make it happen. Our e-commerce solutions offer same-day and scheduled delivery anywhere in the UAE. With clean, well-presented riders and real-time tracking, we turn every online order into a perfect customer experience.
            </p>
          </article>
          <article className="rounded-xl border border-border bg-card p-6 text-card-foreground">
            <h4 className="mb-2 text-xl font-semibold">News &amp; Updates</h4>
            <p className="text-foreground/80">
              At DanDona, we’re constantly raising the standard for delivery in the UAE. Partnering with industry leaders like Talabat, Careem, Noon, and Deliveroo, we share stories, updates, and insights that showcase why our service is second to none.
            </p>
          </article>
          <article className="rounded-xl border border-border bg-card p-6 text-card-foreground">
            <h4 className="mb-2 text-xl font-semibold">Portfolio</h4>
            <p className="text-foreground/80">
              We are proud to deliver for some of the biggest names in the region — Talabat, Careem, Noon, and Deliveroo — as well as countless local businesses. Our riders are fast, courteous, and impeccably presented, making DanDona the first choice for brands that demand the very best.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutExtended;
