import { useState } from 'react';
import PackageCard from './PackageCard';
import { trackContactEvent } from '../lib/analytics';

const packagesData = [
  {
    slug: "saffa",
    title: "Paket Saffa",
    price: "Rp 31 Jutaan",
    description: "Kenyamanan ibadah dengan fasilitas hotel bintang 4 strategis dan pelayanan prima.",
    duration: "9 Hari",
    schedule: "Juli - Desember 2026",
    flight: "Direct Flight",
    mekkahHotel: "Hotel Bintang 4",
    madinahHotel: "Hotel Bintang 4",
    hotelClass: 4,
    freebies: "Kereta Cepat, Tour Thaif, dll",
    images: [
      "https://cgtourtravel.com/wp-content/uploads/2026/04/Saffa-1.png",
      "https://cgtourtravel.com/wp-content/uploads/2026/04/Saffa-2.1.png",
      "https://cgtourtravel.com/wp-content/uploads/2026/04/Saffa-2.2.png",
      "https://cgtourtravel.com/wp-content/uploads/2026/04/Saffa-2.3.png"
    ],
    whatsappLink: "https://api.whatsapp.com/send/?phone=6282312313640&text=#2+Halo+saya+tertarik+dengan+Paket+Saffa&type=phone_number&app_absent=0"
  },
  {
    slug: "marwah",
    title: "Paket Marwah",
    price: "Rp 34 Jutaan",
    description: "Pengalaman ibadah eksklusif dengan fasilitas hotel bintang 5 dan layanan VIP.",
    duration: "9 Hari",
    schedule: "Juli - Desember 2026",
    flight: "Direct Flight",
    mekkahHotel: "Hotel Bintang 5",
    madinahHotel: "Hotel Bintang 5",
    hotelClass: 5,
    freebies: "Kereta Cepat, Tour Thaif, dll",
    images: [
      "https://cgtourtravel.com/wp-content/uploads/2026/04/Marwah-1.png",
      "https://cgtourtravel.com/wp-content/uploads/2026/04/Marwah-2.1.png",
      "https://cgtourtravel.com/wp-content/uploads/2026/04/Marwah-2.2.png",
      "https://cgtourtravel.com/wp-content/uploads/2026/04/Marwah-2.3.png"
    ],
    whatsappLink: "https://wa.me/6282312313640?text=#02%Halo%20saya%20tertarik%20dengan%20Paket%20Marwah"
  }
];

export default function PackageList() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [filteredPackages, setFilteredPackages] = useState(packagesData);

  const handleSearch = () => {
    trackContactEvent('Search', `Cari Paket: ${selectedMonth} - ${selectedType}`);
    
    const results = packagesData.filter(pkg => {
      const matchMonth = selectedMonth === "" || pkg.schedule.toLowerCase().includes(selectedMonth.toLowerCase());
      const matchType = selectedType === "" || pkg.title.toLowerCase().includes(selectedType.toLowerCase());
      return matchMonth && matchType;
    });

    setFilteredPackages(results);
  };

  return (
    <section id="paket" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">Pilihan Paket Keberangkatan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Kami menyediakan berbagai pilihan paket umroh yang dapat disesuaikan dengan kebutuhan dan kenyamanan ibadah Anda.</p>
        </div>

        {/* Filter Section */}
        <div className="bg-white p-4 rounded-2xl shadow-sm mb-12 flex flex-col md:flex-row gap-4 justify-center items-center max-w-4xl mx-auto border border-gray-100">
          <select 
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#dfa828] text-gray-600 bg-white"
          >
            <option value="">Semua Bulan Keberangkatan</option>
            <option value="Juli">Juli 2026</option>
            <option value="Agustus">Agustus 2026</option>
            <option value="September">September 2026</option>
            <option value="Oktober">Oktober 2026</option>
            <option value="November">November 2026</option>
            <option value="Desember">Desember 2026</option>
          </select>
          <select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#dfa828] text-gray-600 bg-white"
          >
            <option value="">Semua Tipe Paket</option>
            <option value="Saffa">Paket Saffa</option>
            <option value="Marwah">Paket Marwah</option>
          </select>
          <button 
            onClick={handleSearch}
            className="w-full md:w-auto bg-[#dfa828] text-white px-8 py-2 rounded-lg hover:bg-[#A88222] transition-colors font-bold"
          >
            Cari Paket
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg, index) => (
              <PackageCard key={pkg.slug} {...pkg} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">Maaf, tidak ada paket yang sesuai dengan pencarian Anda.</p>
              <button 
                onClick={() => {
                  setSelectedMonth("");
                  setSelectedType("");
                  setFilteredPackages(packagesData);
                }}
                className="mt-4 text-[#dfa828] font-bold hover:underline"
              >
                Tampilkan Semua Paket
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
