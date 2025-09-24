"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const countries = [
  { name: "United States", code: "US", currency: "USD" },
  { name: "United Kingdom", code: "GB", currency: "GBP" },
  { name: "European Union", code: "EU", currency: "EUR" },
  { name: "Canada", code: "CA", currency: "CAD" },
  { name: "Australia", code: "AU", currency: "AUD" },
  { name: "Bangladesh", code: "BD", currency: "BDT" },
  { name: "Japan", code: "JP", currency: "JPY" },
  { name: "India", code: "IN", currency: "INR" },
];

export default function DonationForm() {
  const [amount, setAmount] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const router = useRouter();
  const pathName = usePathname();

  const locales = pathName.split("/")[1];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      confirm(
        `Pelase Confirm Details! \n Amount:${amount} \n Full Name:${fullName} \n Number:${phone}`
      )
    ) {
      console.log({
        fullName,
        email,
        amount,
        phone,
        address,
        country: selectedCountry.name,
        currency: selectedCountry.currency,
      });

      router.push(`/${locales}/donate/paynow`);
    } else {
      console.log("Cancel");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center  overflow-hidden  ">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Make a Donation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
          <div className="flex gap-3">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Number
              </label>
              <input
                type="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country & Currency
            </label>
            <select
              id="country"
              value={selectedCountry.code}
              onChange={(e) =>
                setSelectedCountry(
                  countries.find((c) => c.code === e.target.value)
                )
              }
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} ({country.currency})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Donation Amount ({selectedCountry.currency})
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min="1"
              step="any"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center bg-primary-700 py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium cursor-pointer text-white bg-primary-600-600 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Donate
          </button>
        </form>
      </div>
    </section>
  );
}
