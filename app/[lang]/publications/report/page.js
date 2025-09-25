"use client";

import BreadCrumb from "@/components/common/BreadCrumb";
import SelectTab from "@/components/page/report/SelectTab";

export default function ReportsPage() {
  return (
    <section className="p-8 max-w-7xl mx-auto space-y-8">
      <BreadCrumb />

      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <SelectTab />
      </div>
      <div className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800">sssss</div>
    </section>
  );
}
