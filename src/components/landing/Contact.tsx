import { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Quote requested",
      description: "Thanks! We'll be in touch shortly.",
    });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative">
      <div className="container py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Contact Us</h2>
            <p className="mt-4 max-w-prose text-foreground/80">
              Need a delivery today? Tell us what you need and we'll provide a fast,
              no‑obligation quote.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-foreground/80">
              <div>
                <div className="font-semibold text-foreground">Email</div>
                support@dandona.example
              </div>
              <div>
                <div className="font-semibold text-foreground">Phone</div>
                (012) 345‑6789
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow-[var(--shadow-elegant)]">
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <Input name="name" placeholder="Your name" required />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <Input name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Message</label>
                <Textarea name="message" placeholder="Tell us about your delivery…" required rows={5} />
              </div>
              <div className="pt-2">
                <Button type="submit" variant="hero" size="lg" className="w-full">Get a Quote</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
