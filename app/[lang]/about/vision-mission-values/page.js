import BreadCrumb from "@/components/common/BreadCrumb";
import VisionCard from "@/components/page/VisionCard";

export default function page() {
  return (
    <section className="p-8 max-w-7xl mx-auto space-y-8">
      <BreadCrumb />

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-primary-700 md:text-5xl lg:text-6xl dark:text-white">
          We invest in the world’s potential
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
          We are in a family of more than half a million members who are
          relentlessly working for sustainable livelihoods development by
          creating job opportunities for low income segment.
        </p>
      </div>

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
