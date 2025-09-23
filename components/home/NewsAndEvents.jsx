import SectionHeader from "../common/SectionHeader";
import NewsAndEventsCard from "./NewsAndEventsCard";

export default function NewsAndEvents({ data }) {
  return (
    <section className="p-8 max-w-7xl mx-auto space-y-8">
      <SectionHeader text="News and " high="Events" />

      <ul className="flex my-20">
        <li className=" list-disc marker:text-green-500 tracking-wider font-bold">
          News Update
        </li>
      </ul>

      <div className="flex flex-wrap gap-4">
        {data?.map((item, i) => (
          <NewsAndEventsCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
