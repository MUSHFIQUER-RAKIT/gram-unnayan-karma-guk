import BreadCrumb from "@/components/common/BreadCrumb";
import GridAndListSort from "@/components/page/report/GridAndListSort";
import ReportsCard from "@/components/page/report/ReportsCard";
import SelectTabAndFilter from "@/components/page/report/SelectTabAndFilter";
import { getDictionary } from "@/lib/dictionaries";

export default async function ReportsPage({ params, searchParams }) {
  const { reports } = await getDictionary(params?.lang || "en");
  return (
    <section className="p-8 max-w-7xl mx-auto space-y-8">
      <BreadCrumb />

      <div className=" mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <SelectTabAndFilter lang={params?.lang} />
      </div>
      <div className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
        <div className="flex justify-between">
          <ul className="flex ms-7 md:ms-0">
            <li className=" list-disc marker:text-green-500 tracking-wider font-bold">
              {searchParams?.tab?.toUpperCase() || "Reports"}
            </li>
          </ul>
          <div>
            <GridAndListSort />
          </div>
        </div>

        <div className=" flex flex-wrap gap-3 p-5 mt-5 border-t-2 border-primary-500">
          {reports?.report?.map((item, i) => (
            <ReportsCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
