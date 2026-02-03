import React, { useState } from "react";

const FAQ_DATA = [
  {
    question: "Apakah bisa kirim hari yang sama?",
    answer:
      "Ya, kami menerima pesanan same-day delivery untuk menu ready stock sebelum jam 14.00 WIB. Untuk menu custom atau dalam jumlah besar, kami sarankan pemesanan H-1 atau H-2.",
  },
  {
    question: "Apakah bisa request less sugar?",
    answer:
      "Tentu! Beberapa menu signature kami bisa disesuaikan tingkat kemanisannya (less sugar). Silakan hubungi admin kami saat pemesanan untuk detail ketersediaan opsi ini pada menu yang Anda pilih.",
  },
  {
    question: "Berapa minimal order?",
    answer:
      "Tidak ada minimal order untuk pembelian langsung di toko (walk-in). Untuk layanan pengiriman, minimal order adalah Rp 50.000 (belum termasuk ongkos kirim).",
  },
  {
    question: "Apakah halal?",
    answer:
      "Seluruh bahan yang kami gunakan 100% halal dan berkualitas premium. Kami tidak menggunakan alkohol, rum, atau bahan non-halal lainnya dalam proses produksi kami.",
  },
];

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#D4AF37]/20 last:border-none">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <span
          className={`text-lg font-medium transition-colors duration-300 ${
            isOpen ? "text-[#D4AF37]" : "text-white group-hover:text-[#D4AF37]"
          }`}
        >
          {question}
        </span>
        <div
          className={`relative w-6 h-6 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <div className="absolute top-1/2 left-0 w-6 h-0.5 bg-[#D4AF37]"></div>
          <div
            className={`absolute top-0 left-1/2 w-0.5 h-6 bg-[#D4AF37] -translate-x-1/2 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-black" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Common Questions
          </h4>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="bg-[#1f1f1f] border border-[#D4AF37]/10 rounded-2xl p-6 md:p-8 shadow-2xl">
          {FAQ_DATA.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
