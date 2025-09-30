import Image from "next/image";
import Link from "next/link";
import Counter from "../common/Counter";
import Marquee from "../common/Marquee";
import DonationStats from "./DonationStats";

export default function HeroSection({ marquee }) {
  return (
    <section
      id="Hero"
      className="relative h-screen flex items-center justify-center 
                 bg-[url('/download.png')] bg-center bg-no-repeat bg-[length:1200px_auto] 
                 before:content-[''] before:absolute before:inset-0 
                 before:bg-white/90 "
    >
      <Marquee marquee={marquee} />
      <div className="max-w-7xl  flex flex-col md:flex-row ">
        <div className="relative z-10 flex flex-col gap-7 ms-4">
          <ul className="flex ms-7 md:ms-0">
            <li className=" list-disc marker:text-green-500 tracking-wider font-bold">
              Be the Difference
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 pt-3 ">
            <div className="flex flex-col gap-2 h-20 md:h-28 text-white rounded-xl shadow-md p-6  max-w-[240px] bg-primary-700  ">
              <div className="font-semibold text-sm md:text-md">
                NUMBER OF OFFICES
              </div>
              <Counter targetNumber="495" />
            </div>

            <div className="flex flex-col gap-2 h-20 md:h-28 text-white rounded-xl shadow-md p-6 max-w-[240px] bg-gray-800/30   backdrop-blur-lg">
              <div className="font-semibold text-sm md:text-md">
                DISTRICT COVERED
              </div>
              <Counter targetNumber="56" />
            </div>

            <div className="flex flex-col gap-2 h-20 md:h-28 text-white rounded-xl shadow-md p-6 max-w-[240px] bg-primary-700  ">
              <div className="font-semibold text-sm md:text-md">
                THOUSAND MEMBERS
              </div>
              <Counter targetNumber="610" />
            </div>

            <div className="flex flex-col gap-2 h-24 md:h-32 text-white rounded-xl shadow-md p-4 max-w-[180px] md:max-w-[240px] bg-gray-800/30   backdrop-blur-lg">
              <div className="font-semibold text-sm md:text-md">
                CRORE TAKA LOAN DISBURSEMENT
              </div>
              <Counter targetNumber="23000" />
            </div>

            <DonationStats />
          </div>

          <div>
            <button className="py-4 px-6 mr-3 text-sm bg-primary-600 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-primary-800">
              At a Glance
            </button>
            <Link
              href="en/about/vision-mission-values"
              className="py-4 px-6 text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-300"
            >
              Vision, Mission & Values
            </Link>
          </div>
        </div>
        <div className="relative z-10 w-2/3 mx-auto my-5">
          <div className="max-w-[900px] grid grid-cols-3 md:grid-cols-3 gap-4">
            <div className="grid gap-4">
              <Image
                width={192}
                height={160}
                className=" w-28 h-32 md:w-48 md:h-40 rounded-lg object-cover"
                src="/New-Project.jpg"
                alt="feautre1"
              />
              <Image
                width={192}
                height={192}
                className="w-28 h-28 md:w-48 md:h-48 rounded-lg object-cover"
                src="/548194496_1166237188933958_3438882680348332869_n.jpg"
                alt="feautre1"
              />
              <Image
                width={192}
                height={160}
                className="w-28 h-32 md:w-48 md:h-40 rounded-lg object-cover"
                src="/547663823_1164374189120258_8839391015959107002_n.jpg"
                alt="feautre1"
              />
            </div>
            <div className="grid gap-4">
              <Image
                width={192}
                height={192}
                className="w-28 h-36 md:w-48 md:h-48 rounded-lg object-cover"
                src="/549270717_1171926331698377_683306483663419016_n.jpg"
                alt="feautre1"
              />
              <Image
                width={192}
                height={192}
                className="w-28 h-32 md:w-48 md:h-48 rounded-lg object-cover"
                src="/IMG_1905-1.jpg"
                alt="feautre1"
              />
              <Image
                width={192}
                height={160}
                className="w-28 h-32 md:w-48 md:h-40 rounded-lg object-cover"
                src="/IMG_20180220_094706-scaled.jpg"
                alt="feautre1"
              />
            </div>
            <div className="grid gap-4">
              <Image
                width={192}
                height={224}
                className="w-28 h-32 md:w-48 md:h-56 rounded-lg object-cover"
                src="/IMG_20180220_094706-scaled.jpg"
                alt="feautre1"
              />
              <Image
                width={192}
                height={160}
                className="w-28 h-32 md:w-48 md:h-40 rounded-lg object-cover"
                src="/Tree-Plantation-Program-2025-1.jpg"
                alt="feautre1"
              />
              <Image
                width={192}
                height={192}
                className="w-28 h-36 md:w-48 md:h-48 rounded-lg object-cover"
                src="/Tree-Plantation-Program-2025-1.jpg"
                alt="feautre1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
