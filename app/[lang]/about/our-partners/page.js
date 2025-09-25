import BreadCrumb from "@/components/common/BreadCrumb";
import SectionBigHeader from "@/components/common/SectionBigHeader";
import OurPartnersHEading from "@/components/page/OurPartnersHEading";

import Swipper from "@/components/page/Swipper";
import { getDictionary } from "@/lib/dictionaries";

export default async function OurPartnersPage({ params: { lang } }) {
  const { networkPartners, developmenPartners } = await getDictionary(lang);
  return (
    <section className="p-8 max-w-7xl mx-auto space-y-8">
      <BreadCrumb />

      <SectionBigHeader
        title="Our Impact Partners"
        des="We believe that the greatest challenges require the greatest collaboration. These organizations are more than just sponsors; they are vital partners who share our vision and provide the resources, expertise, and dedication needed to drive lasting, positive change in our communities."
      />

      <div className="mx-auto max-w-7xl px-4 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16">
          <OurPartnersHEading type="development" />

          <div className="lg:w-3/5">
            <Swipper partners={developmenPartners} />
          </div>
        </div>
      </div>
      <div className="border-b-4 border-green-700 mb-6"></div>
      <div className="mx-auto max-w-7xl px-4 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-center  gap-16">
          <div className="lg:w-3/5">
            <Swipper partners={networkPartners} />
          </div>
          <OurPartnersHEading />
        </div>
      </div>
    </section>
  );
}
