export default function SectionHeader({ text, high }) {
  return (
    <div className=" text-center">
      <h1 className=" font-bold text-xl text-gray-600">
        {text} <span className=" text-primary-600">{high}</span>
      </h1>
      <hr className="w-56 h-1 mx-auto  bg-primary-800 border-0 rounded-sm  my-5 before:content-[0]" />
    </div>
  );
}
