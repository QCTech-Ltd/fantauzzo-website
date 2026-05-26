import CtaBanner from "@/components/home/CtaBanner";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyUs from "@/components/home/WhyUs";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyUs />
      <CtaBanner />
    </>
  );
}
