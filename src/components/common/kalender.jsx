import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";

// Fungsi untuk mendapatkan jumlah hari dalam sebulan
const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
};

// Nama-nama bulan
const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

// Nama-nama hari
const dayNames = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

const Kalender = () => {
    const [year] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [direction, setDirection] = useState("right");

    // Tanggal hari ini
    const today = new Date().getDate();
    const thisMonth = new Date().getMonth();
    const thisYear = new Date().getFullYear();

    // Fungsi untuk menggeser ke bulan sebelumnya
    const handlePrevMonth = () => {
        setDirection("left");
        setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    };

    // Fungsi untuk menggeser ke bulan berikutnya
    const handleNextMonth = () => {
        setDirection("right");
        setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    };

    const daysInMonth = getDaysInMonth(currentMonth, year);

    return (
        <div className=" w-full md:w-full">
            <div className="flex flex-row gap-2 justify-center border-b-2 border-[#dddd] mb-4 ">
                <span className="text-[#2D4059] font-light text-lg">
                    <FontAwesomeIcon icon={faCalendarDays} />
                </span>
                <h3 className="text-lg font-semibold text-[#2D4059] text-center mb-2">
                    KALENDER {year}
                </h3>
            </div>

            <div className="flex justify-between items-center mb-4 px-2">
                <motion.button
                    onClick={handlePrevMonth}
                    className="bg-[#176AD1] text-white px-4 py-2 rounded-md hover:bg-[#0f4d9e] flex items-center"
                    whileTap={{ scale: 0.9 }}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </motion.button>
                <h4 className="text-lg font-bold text-[#176AD1]">{monthNames[currentMonth]}</h4>
                <motion.button
                    onClick={handleNextMonth}
                    className="bg-[#176AD1] text-white px-4 py-2 rounded-md hover:bg-[#0f4d9e] flex items-center"
                    whileTap={{ scale: 0.9 }}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </motion.button>
            </div>

            <div className="relative h-64 overflow-hidden">
                <AnimatePresence>
                    <motion.div
                        key={currentMonth}
                        initial={{ opacity: 0, x: direction === "right" ? 300 : -300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction === "right" ? -300 : 300 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute w-full p-2"
                    >
                        {/* Header untuk nama hari */}
                        <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-[#2D4059] mb-2">
                            {dayNames.map((day) => (
                                <div key={day} className="p-2">{day}</div>
                            ))}
                        </div>

                        {/* Tanggal */}
                        <div className="grid grid-cols-7 gap-2 text-center text-xs">
                            {Array.from({ length: daysInMonth }, (_, day) => {
                                const date = day + 1;
                                const isToday = date === today && currentMonth === thisMonth && year === thisYear;
                                return (
                                    <div
                                        key={date}
                                        className={`p-2 rounded-md border border-[#2D4059] ${
                                            isToday
                                                ? "bg-[#176AD1] text-white"
                                                : "bg-[#f6faff] text-[#2D4059]"
                                        }`}
                                    >
                                        {date}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Kalender;
