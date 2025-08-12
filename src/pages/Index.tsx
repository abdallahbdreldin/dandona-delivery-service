import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";
import Captions from "@/components/landing/Captions";
import AboutExtended from "@/components/landing/AboutExtended";
import Clients from "@/components/landing/Clients";
import Gallery from "@/components/landing/Gallery";

const Index = () => {
  const siteUrl = "/";
  const description =
    "Dandona Delivery Services: fast, secure, reliable deliveries with real‑time tracking and 24/7 support.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dandona Delivery Services",
    url: siteUrl,
    sameAs: [],
    logo: "/favicon.ico",
    address: {
      "@type": "PostalAddress",
      addressLocality: "City",
      addressCountry: "Country",
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Courier & Same‑Day Delivery",
        areaServed: "Local",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Dandona Delivery Services — Fast, Secure Delivery</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={siteUrl} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Captions />
        <Services />
        <AboutExtended />
        <Clients />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
