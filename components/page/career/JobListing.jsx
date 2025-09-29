export default function JobListing({ category, positions, bgColor }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Category Header Bar - Mimicking the banded design */}
      <div
        className={`p-4 sm:p-5 text-white font-bold text-xl bg-gradient-to-r ${bgColor} flex justify-between items-center`}
      >
        <span>{category}</span>
        {/* Placeholder for optional "Positions Available" count in the header */}
        <span className="text-sm opacity-90">
          {positions.length} Position{positions.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Position List */}
      <div className="divide-y divide-gray-100">
        {positions.map((position, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 hover:bg-gray-50 transition duration-150"
          >
            <div className="mb-2 sm:mb-0 sm:w-1/2">
              <p className="text-lg font-semibold text-gray-800">
                {position.title}
              </p>
            </div>

            <div className="flex flex-wrap items-center space-x-4 sm:space-x-8 text-sm text-gray-600">
              <span className="flex-shrink-0">
                <span className="font-medium text-gray-500">Available:</span>{" "}
                {position.available}
              </span>
              <span className="flex-shrink-0">
                <span className="font-medium text-gray-500">Apply Before:</span>{" "}
                {position.applyBefore}
              </span>
              <button className="mt-2 sm:mt-0 px-4 py-2 text-sm bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition duration-150 shadow-md">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
