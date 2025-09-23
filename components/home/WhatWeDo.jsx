import SectionHeader from "../common/SectionHeader";
import WhatWeDoCard from "./WhatWeDoCard";
import WhatWeDoCardRight from "./WhatWeDoCardRight";

export default function WhatWeDo({ data }) {
  return (
    <section className="p-8 max-w-7xl mx-auto space-y-8 ">
      <SectionHeader text="What We" high="Do" />
      <div className="flex">
        <div>
          {data?.left?.map((item, i) => (
            <WhatWeDoCard
              key={i}
              src={item?.src}
              title={item?.title}
              des={item?.des}
            />
          ))}
        </div>

        <div className="text-primary-600 self-center text-center px-7 font-extrabold whitespace-pre leading-[3rem]">
          {`O\nU\nR\nW\nO\nR\nK\nS`}
        </div>

        <div>
          {data?.right?.map((item, i) => (
            <WhatWeDoCardRight
              key={i}
              src={item?.src}
              title={item?.title}
              des={item?.des}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
