import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBullhorn, faClock, faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';

const Pengumuman = () => {
    // Data pengumuman
    const announcements = [
        {
            title: "Pengumuman 1",
            details: "Sistem akan diperbarui dengan fitur-fitur baru dan peningkatan keamanan.",
            date: "30 September 2024",
        },
        {
            title: "Pengumuman 2",
            details: "Rapat bulanan ini akan membahas tentang evaluasi kinerja dan rencana proyek mendatang.",
            date: "15 Oktober 2024",
        },
        {
            title: "Pengumuman 3",
            details: "Semua divisi diharapkan mengumpulkan laporan akhir tahun pada tanggal 20 Desember.",
            date: "20 Desember 2024",
        },
        {
            title: "Pengumuman 4",
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
        <div className="w-full md:w-full">
            <div className="flex flex-row gap-2 justify-center border-b-2 border-[#dddd] mb-4 ">
                <span className="text-[#2D4059] font-light text-lg"> 
                    <FontAwesomeIcon icon={faBullhorn} />
                </span>
                <h3 className="text-lg font-semibold text-[#2D4059] text-center mb-2">PENGUMUMAN</h3>
            </div>


            {/* Kontainer dengan max-height dan overflow-scroll */}
            <div className="overflow-y-auto max-h-96">
                {announcements.map((announcement, index) => (
                    <div key={index} className="mb-4  p-4 bg-white border rounded-lg shadow-lg">
                        {/* Kontainer flex untuk judul dan tanggal */}
                        <div className="flex flex-row justify-between items-start">
                            <h4 className="text-sm font-semibold text-[#176AD1]">{announcement.title}</h4>
                            <div className="flex gap-1 mt-1">
                                <span className="text-[#2D4059] text-xxs"  ><FontAwesomeIcon icon={faClock} /></span>
                                <p className="text-xxs text-gray-500">{announcement.date}</p>
                            </div>
                            
                        </div>

                        {/* <p className="text-[#176AD1] mt-1 text-sm">{announcement.summary}</p> */}
                        {expandedIndex === index ? (
                                <p className="text-gray-700 mt-2 text-xs">{announcement.details}</p>
                            ) : (
                                <p className="text-gray-700 mt-2 text-xs line-clamp-2">
                                    {announcement.details}
                                </p>
                            )}


                        <div className="flex justify-end">
                            <button
                                className=" text-[#2D4059] rounded-full bg-[#fefce8] py-1 px-2 font-normal text-xs mt-2"
                                onClick={() => toggleDetails(index)}
                            >
                                {expandedIndex === index ? (
                                    <FontAwesomeIcon icon={faAnglesLeft} />
                                ) : (
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pengumuman;
