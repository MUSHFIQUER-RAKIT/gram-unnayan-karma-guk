// app/notice/page.js
import Pagination from "@/components/common/Pagination";
import { DownloadCloud } from "lucide-react"; // For the download icon

const noticesData = [
  {
    id: 1,
    description:
      "Circular for Endline survey under Rural Microenterprise Transformation Project (RMTP) of GUK",
    publishDate: "28 Aug 2025",
    deadline: "07 Sep 2025",
  },
  {
    id: 2,
    description: "ToR for Endline Study under RMTP-Poultry Sub-project",
    publishDate: "11 Aug 2025",
    deadline: "16 Aug 2025",
  },
  {
    id: 3,
    description:
      "Annual Procurement Plan (APP) of ECCCP Project funded by GCF-PKSF",
    publishDate: "11 Aug 2025",
    deadline: "16 Aug 2025",
  },
  {
    id: 4,
    description:
      "GUK Invites Entrepreneurs for Setting Up a Poultry Diagnostic Lab in Bogura",
    publishDate: "05 Aug 2025",
    deadline: "10 Aug 2025",
  },
  {
    id: 5,
    description:
      "ToR GUK Livestock Dashboard IoT based milk analyser E commented",
    publishDate: "15 May 2025",
    deadline: "15 May 2025",
  },
  {
    id: 6,
    description:
      "GUK is hiring an individual consultant to 'Assessing the Sustainability of Chicken Coop Model (semi-scavenging) for Indigenous Chickens under RMTP' Project.",
    publishDate: "06 Mar 2025",
    deadline: "", // Can be empty if no deadline
  },
  {
    id: 7,
    description: "Invitation for Tender (IFT) for Canal Re-excavation",
    publishDate: "08 Dec 2024",
    deadline: "",
  },
  {
    id: 8,
    description: "Invitation for Tender (IFT) for Pond",
    publishDate: "24 Nov 2024",
    deadline: "",
  },
  {
    id: 9,
    description: "Annual Procurement Plan (APP) of ECCCP-Drought Project",
    publishDate: "17 Oct 2024",
    deadline: "",
  },
];

export default function NoticePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-12">
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Latest Notices & Publications
        </h1>
        <p className="text-xl text-gray-600">
          Stay informed with our official announcements and documents.
        </p>
      </header>

      <main className="max-w-4xl mx-auto space-y-4">
        {noticesData.map((notice) => (
          <div
            key={notice.id}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col md:flex-row items-start md:items-center justify-between transition-all duration-200 hover:shadow-lg hover:border-primary-300 border border-transparent"
          >
            <div className="flex-1 mb-4 md:mb-0 md:pr-4">
              <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                {notice.description}
              </p>
              <div className="mt-2 text-sm text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
                <span className="flex items-center">
                  <span className="font-medium text-gray-500">Published:</span>{" "}
                  {notice.publishDate}
                </span>
                {notice.deadline && (
                  <span className="flex items-center">
                    <span className="font-medium text-gray-500">Deadline:</span>{" "}
                    {notice.deadline}
                  </span>
                )}
              </div>
            </div>

            <div className="flex-shrink-0">
              <button className="px-5 py-2 bg-primary-600 text-white font-medium rounded-lg flex items-center space-x-2 hover:bg-primary-700 transition duration-150 shadow-md">
                <DownloadCloud size={18} />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}

        <Pagination />
      </main>
    </div>
  );
}
