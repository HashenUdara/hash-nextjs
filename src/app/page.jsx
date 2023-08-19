import { Hero } from "@/components/ui/hero";
import { Features } from "@/components/ui/features";
import { Pricing } from "@/components/ui/pricing";
// import { Cta } from "@/components/landing/cta";

export default function Page() {
  return (
    <div className="overflow-x-hidden max-w-screen">
      <Hero />
      <Features />
      <Pricing />
      {/*<Cta />*/}
    </div>
  );
}