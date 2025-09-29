"use client";

import { useState } from "react";

export default function FAQSection({ faqs }) {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-lg p-4 cursor-pointer"
            onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
          >
            <h3 className="text-lg font-semibold flex justify-between items-center">
              {faq.q}
              <span>{openFAQ === idx ? "−" : "+"}</span>
            </h3>
            {openFAQ === idx && <p className="mt-2 text-gray-600">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
