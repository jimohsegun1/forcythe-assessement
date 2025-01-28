import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import ProductsDisplay from "@/components/ProductsDisplay";
import Testimonial from "@/components/Testimonial";
import TheProcess from "@/components/TheProcess";
import Values from "@/components/Values";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductsDisplay />
      <Testimonial />
      <TheProcess />
      <Values />
      <Blog />
      <CTA />
    </main>
  );
}
