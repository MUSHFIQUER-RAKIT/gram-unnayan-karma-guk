export default function VisionCard({ title, des }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
      <div className="flex items-center mb-4">
        <h2 className="text-4xl font-bold text-green-700">{title}</h2>
      </div>
      <div className="border-b-4 border-green-700 mb-6"></div>
      {title === "Our Values" ? (
        <ul className=" list-disc text-left p-5 ms-10 ">
          <li>Integrity</li>
          <li>Participation</li>
          <li>Passion</li>
          <li>Inclusiveness </li>
          <li>Accountability </li>
          <li>Innovation </li>
        </ul>
      ) : (
        <p className="text-xl italic text-gray-800 leading-relaxed">{des}</p>
      )}
    </div>
  );
}
