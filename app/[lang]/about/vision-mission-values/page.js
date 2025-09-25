import BreadCrumb from "@/components/common/BreadCrumb";
import SectionBigHeader from "@/components/common/SectionBigHeader";
import VisionCard from "@/components/page/VisionCard";

export default function page() {
  return (
    <section className="p-8 max-w-7xl mx-auto space-y-8">
      <BreadCrumb />

      <SectionBigHeader
        title="We invest in the world’s potential"
        des="We are in a family of more than half a million members who are
              relentlessly working for sustainable livelihoods development by creating
              job opportunities for low income segment."
      />

      <VisionCard
        title="Our Vision"
        des=" GUK aspires that empowered communities overcome poverty and emerge as a
        nodal agency for sustainable socio-economic development."
      />
      <VisionCard
        title="Our Mission"
        des="The mission of GUK is to empower communities by ensuring access to finance education, healthcare, food and nutrition and various socio-economic development activities towards employment creation and resilience building.."
      />
      <VisionCard title="Our Values" />
    </section>
  );
}
