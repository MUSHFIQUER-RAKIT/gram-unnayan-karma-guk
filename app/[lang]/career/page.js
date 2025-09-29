import FilterCareer from "@/components/page/career/FilterCareer";
import JobListing from "@/components/page/career/JobListing";

const jobData = [
  {
    category: "Project Coordinator (PC)",
    positions: [
      {
        title: " Extended Community Climate Change",
        available: 2,
        applyBefore: "2024-10-15",
      },
      {
        title: " Extended Community Climate Change",
        available: 1,
        applyBefore: "2024-09-30",
      },
    ],
    bgColor: "from-green-400 to-teal-500",
  },
  {
    category: "UI/UX Design",
    positions: [
      {
        title: "Lead UI/UX Architect",
        available: 1,
        applyBefore: "2024-09-25",
      },
      {
        title: "Tailwind CSS Designer",
        available: 1,
        applyBefore: "2024-09-25",
      },
    ],
    bgColor: "from-sky-400 to-blue-500",
  },
  {
    category: "Assistant IT Officer",
    positions: [
      {
        title: "IT Field Support",
        available: 3,
        applyBefore: "2024-09-01",
      },
    ],
    bgColor: "from-purple-400 to-indigo-500",
  },
];

export default function CareerPage({ params: { lang } }) {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-12">
      <header className="max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Career Opportunities at GUK
        </h1>
        <p className="text-xl text-gray-600">Join our team !</p>
      </header>

      <div className="max-w-4xl mx-auto space-y-6">
        <FilterCareer lang={lang} />
        <h2 className="text-2xl font-semibold text-gray-800">
          Available Positions
        </h2>

        {jobData.map((categoryData, index) => (
          <JobListing
            key={index}
            category={categoryData.category}
            positions={categoryData.positions}
            bgColor={categoryData.bgColor}
          />
        ))}

        <div className="mt-10 pt-6 border-t border-gray-200 flex justify-between items-center">
          <p className="text-lg text-gray-700">
            Interested in other roles? Send us your open application.
          </p>
          <button className="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition duration-150 shadow-md">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
