import PackageCard from './PackageCard';

const packages = [
  {
    slug: "saffa",
    title: "Paket Saffa",
    price: "Rp 29 Jutaan",
    description: "Kenyamanan ibadah dengan fasilitas hotel bintang 4 strategis dan pelayanan prima.",
    duration: "9 Hari",
    schedule: "Juli - September 2026",
    flight: "Direct Flight",
    mekkahHotel: "Hotel Bintang 4",
    madinahHotel: "Hotel Bintang 4",
    hotelClass: 4,
    freebies: "Kereta Cepat, Tour Thaif, dll",
    seatsLeft: 15,
    images: [
      "http://cgtourtravel.com/wp-content/uploads/2026/04/saf1.png",
      "http://cgtourtravel.com/wp-content/uploads/2026/04/Saf-2.png",
      "http://cgtourtravel.com/wp-content/uploads/2026/04/saf3.png"
    ],
    whatsappLink: "https://api.whatsapp.com/send/?phone=6282312313640&text=Halo+saya+tertarik+dengan+Paket+Saffa+#02&type=phone_number&app_absent=0"
  },
  {
    slug: "marwah",
    title: "Paket Marwah",
    price: "Rp 32 Jutaan",
    description: "Pengalaman ibadah eksklusif dengan fasilitas hotel bintang 5 dan layanan VIP.",
    duration: "9 Hari",
    schedule: "Juli - September 2026",
    flight: "Direct Flight",
    mekkahHotel: "Hotel Bintang 5",
    madinahHotel: "Hotel Bintang 5",
    hotelClass: 5,
    freebies: "Kereta Cepat, Tour Thaif, dll",
    seatsLeft: 10,
    images: [
      "http://cgtourtravel.com/wp-content/uploads/2026/04/mar1.png",
      "http://cgtourtravel.com/wp-content/uploads/2026/04/mar2.png",
      "http://cgtourtravel.com/wp-content/uploads/2026/04/mar3.png"
    ],
    whatsappLink: "https://wa.me/6282312313640?text=Halo%20saya%20tertarik%20dengan%20Paket%20Marwah"
  }
];

export default function PackageList() {
  return (
    <section id="paket" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">Pilihan Paket Keberangkatan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Kami menyediakan berbagai pilihan paket umroh yang dapat disesuaikan dengan kebutuhan dan kenyamanan ibadah Anda.</p>
        </div>

        {/* Filter Section (Simplified for UI) */}
        <div className="bg-white p-4 rounded-2xl shadow-sm mb-12 flex flex-col md:flex-row gap-4 justify-center items-center max-w-4xl mx-auto border border-gray-100">
          <select className="w-full md:w-auto px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#dfa828] text-gray-600">
            <option>Bulan Keberangkatan</option>
            <option>Juli 2026</option>
            <option>Agustus 2026</option>
            <option>September 2026</option>
            <option>Oktober 2026</option>
            <option>November 2026</option>
            <option>Desember 2026</option>
          </select>
          <select className="w-full md:w-auto px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#dfa828] text-gray-600">
            <option>Tipe Paket</option>
            <option>Paket Saffa</option>
            <option>Paket Marwah</option>
          </select>
          <button className="w-full md:w-auto bg-[#dfa828] text-white px-8 py-2 rounded-lg hover:bg-[#A88222] transition-colors">
            Cari Paket
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
