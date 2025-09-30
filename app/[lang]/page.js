import DonationSection from "@/components/home/DonationSection";
import Gallery from "@/components/home/Gallery";
import HeroSection from "@/components/home/HeroSection";
import NewsAndEvents from "@/components/home/NewsAndEvents";
import WhatWeDo from "@/components/home/WhatWeDo";
import { getDictionary } from "@/lib/dictionaries";

export default async function Home({ params: { lang } }) {
  const { whatWeDo, newsandEvents, marquee } = await getDictionary(lang);

  return (
    <>
      <HeroSection marquee={marquee} />
      <WhatWeDo data={whatWeDo} />
      <NewsAndEvents data={newsandEvents} />
      <DonationSection />
      <Gallery />
    </>
  );
}
