import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex justify-center mt-8">
      <nav className="flex items-center space-x-2">
        <button className="px-4 py-2 text-gray-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-150">
          Previous
        </button>
        <button className="px-4 py-2 text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors duration-150">
          1
        </button>
        <button className="px-4 py-2 text-gray-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-150">
          2
        </button>
        <button className="px-4 py-2 text-gray-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-150">
          Next
        </button>
      </nav>
    </div>
  );
}
