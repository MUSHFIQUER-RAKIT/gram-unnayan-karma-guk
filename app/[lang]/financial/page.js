import C_Link from "@/components/common/C_Link";
import FAQSection from "@/components/common/FAQSection";
import { getDictionary } from "@/lib/dictionaries";
import Image from "next/image";

export default async function LoansPage({ params: { lang } }) {
  const {
    financial: { heading, card, loans, faqs },
  } = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gray-100 text-white py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold  text-black uppercase tracking-wider">
              {heading?.title}
            </span>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              {heading?.bigTitle}
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              {heading?.description}
            </p>
          </div>
          <div className="flex justify-evenly">
            <Image
              height={300}
              width={400}
              src="/micro_finance.jpg"
              alt="card"
              className=" rounded-2xl"
            />

            <div className="max-w-sm p-6   dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card?.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {card?.description}
              </p>
              <C_Link text={card?.btn} link="financial/apply" />
            </div>
          </div>
        </div>
      </section>

      {/* Loan Cards */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {loans.map((loan, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition"
          >
            <h2 className="text-2xl font-semibold text-green-600 mb-3">
              {loan.title}
            </h2>
            <p className="text-gray-600 mb-4">{loan.description}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {loan.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
            <C_Link text="Apply Now" link="financial/apply" />
          </div>
        ))}
      </section>

      <FAQSection faqs={faqs} />
      {/* Contact Form */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
            Contact Us
          </h2>
          <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
