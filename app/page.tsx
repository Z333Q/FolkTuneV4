import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CategoriesShowcase } from "@/components/categories-showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <CategoriesShowcase />
      </div>
      <Features />
    </>
  );
}