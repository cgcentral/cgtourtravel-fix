import PackageCard from './PackageCard';

const packages = [
  {
    title: "Umroh Akbar Bersama UAS",
    price: "Rp 30 Jutaan",
    duration: "9 Hari",
    schedule: "Menyesuaikan",
    flight: "Direct Flight",
    mekkahHotel: "Hotel Bintang 4/5",
    madinahHotel: "Hotel Bintang 4/5",
    hotelClass: 4,
    freebies: "Kereta Cepat, Tour Thaif, dll",
    seatsLeft: 12,
    whatsappLink: "https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20Paket%20Umroh%20Akbar%20Bersama%20UAS"
  },
  {
    title: (
      <>
        Umroh Mister Catur
        <span className="block text-lg text-[#C69C2D] italic mt-1 font-semibold">Coming Soon</span>
      </>
    ),
    price: "Rp 30 Jutaan",
    duration: "9 Hari",
    schedule: "Menyesuaikan",
    flight: "Direct Flight",
    mekkahHotel: "Hotel Bintang 4/5",
    madinahHotel: "Hotel Bintang 4/5",
    hotelClass: 4,
    freebies: "Kereta Cepat, Tour Thaif, dll",
    seatsLeft: 25,
    whatsappLink: "https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20Paket%20Umroh%20Mister%20Catur"
  },
  {
    title: "Umroh Akbar Akhir Tahun",
    price: "Rp 30 Jutaan",
    duration: "9 Hari",
    schedule: "Menyesuaikan",
    flight: "Direct Flight",
    mekkahHotel: "Hotel Bintang 4/5",
    madinahHotel: "Hotel Bintang 4/5",
    hotelClass: 4,
    freebies: "Kereta Cepat, Tour Thaif, dll",
    seatsLeft: 5,
    whatsappLink: "https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20Paket%20Umroh%20Akbar%20Akhir%20Tahun"
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
          <select className="w-full md:w-auto px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C69C2D] text-gray-600">
            <option>Bulan Keberangkatan</option>
            <option>Agustus 2026</option>
            <option>September 2026</option>
          </select>
          <select className="w-full md:w-auto px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C69C2D] text-gray-600">
            <option>Tipe Paket</option>
            <option>Reguler</option>
            <option>Plus</option>
            <option>VIP</option>
          </select>
          <button className="w-full md:w-auto bg-[#1E293B] text-white px-8 py-2 rounded-lg hover:bg-slate-700 transition-colors">
            Cari Paket
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
