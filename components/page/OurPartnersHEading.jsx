import Image from "next/image";

export default function OurPartnersHEading({ type }) {
  let img;
  let des;

  switch (type) {
    case "development":
      img = "/devlopmen.png";
      des =
        "has partnership  with 28 national & international donor agencies and financial institutions for opening the windows of development opportunities.";
      break;

    default:
      img = "/Networking.jpg";
      des =
        "has network with 23 different govt. & non govt. entities for strengthening institutional sustainability.";
      break;
  }
  return (
    <div className="lg:w-2/5 mb-10 lg:mb-0">
      <Image width={400} height={400} src={img} alt="d" />
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
        Gram Unnayan Karma (GUK)
      </h2>
      <p className="text-lg text-gray-600 max-w-md">{des}</p>
    </div>
  );
}
