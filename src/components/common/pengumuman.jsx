import { useState } from "react";

const Pengumuman = () => {
    // Data pengumuman
    const announcements = [
        {
            title: "Pengumuman 1",
            summary: "Update sistem pada tanggal 30 September",
            details: "Sistem akan diperbarui dengan fitur-fitur baru dan peningkatan keamanan.",
            date: "30 September 2024",
        },
        {
            title: "Pengumuman 2",
            summary: "Event rapat bulanan pada 15 Oktober",
            details: "Rapat bulanan ini akan membahas tentang evaluasi kinerja dan rencana proyek mendatang.",
            date: "15 Oktober 2024",
        },
        {
            title: "Pengumuman 3",
            summary: "Pengumpulan laporan akhir tahun",
            details: "Semua divisi diharapkan mengumpulkan laporan akhir tahun pada tanggal 20 Desember.",
            date: "20 Desember 2024",
        },
        {
            title: "Pengumuman 4",
            summary: "Libur Nasional",
            details: "Kantor akan ditutup pada tanggal 25 Desember untuk merayakan liburan Natal.",
            date: "25 Desember 2024",
        }
    ];

    // State untuk melacak pengumuman yang diperluas
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Fungsi untuk toggle pengumuman
    const toggleDetails = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="bg-[#176AD1] bg-opacity-20 shadow-lg p-4 rounded-lg w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-[#2D4059] text-center mb-4">PENGUMUMAN</h3>

            {/* Kontainer dengan max-height dan overflow-scroll */}
            <div className="overflow-y-auto max-h-64">
                {announcements.map((announcement, index) => (
                    <div key={index} className="mb-4 mr-2 p-4 bg-white border rounded-lg">
                        {/* Kontainer flex untuk judul dan tanggal */}
                        <div className="flex justify-between items-center">
                            <h4 className="text-lg font-semibold text-[#176AD1]">{announcement.title}</h4>
                            <span className="text-xs text-gray-500">{announcement.date}</span>
                        </div>

                        <p className="text-[#176AD1]">{announcement.summary}</p>
                        {expandedIndex === index && (
                            <p className="text-gray-700 mt-2">{announcement.details}</p>
                        )}

                        <div className="flex justify-end">
                            <button
                                className=" w-1/3 text-white box-border bg-[#176AD1]  rounded-full p-1 font-normal text-xs mt-2"
                                onClick={() => toggleDetails(index)}
                            >
                                {expandedIndex === index ? "Tutup" : "Selengkapnya"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pengumuman;
