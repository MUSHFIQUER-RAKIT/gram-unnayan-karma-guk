import { WalletCards } from "lucide-react";
import MyLink from "../common/MyLink";

export default function DonationSection() {
  return (
    <section className="p-8 max-w-7xl mx-auto space-y-8 ">
      <div className="w-[98.5%] mx-auto my-8 relative">
        <div className="relative bg-[url('/donate.jpg')] bg-cover bg-center bg-no-repeat  rounded-2xl p-8 shadow-xl border border-dotted border-gray-200">
          <div className="mt-8 flex flex-col items-center justify-center space-y-4">
            <div className="p-4 bg-primary-700 text-white rounded-full cursor-pointer transition-all duration-300 hover:bg-primary-600">
              <WalletCards />
            </div>

            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold   mb-4">
                🤝 Support Our Mission
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Your generous donation enables us to continue our work in
                serving communities, uplifting lives, and creating lasting
                change. Together, we can build a brighter future for those in
                need.
              </p>
            </div>

            <MyLink />
          </div>
        </div>
      </div>
    </section>
  );
}
