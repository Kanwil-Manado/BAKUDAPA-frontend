import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";

// Fungsi untuk mendapatkan jumlah hari dalam bulan
const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
};

// Fungsi untuk mendapatkan nama bulan
const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

const Kalender = () => {
    const [year] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [direction, setDirection] = useState("right");

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
        <div className="bg-[#176AD1] bg-opacity-20 shadow-lg p-4 rounded-lg w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-[#2D4059] text-center mb-4">KALENDER {year}</h3>

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
                        className="absolute w-full grid grid-cols-7 p-2 gap-2 text-center text-xs"
                    >
                        {Array.from({ length: daysInMonth }, (_, day) => (
                            <div key={day} className="p-2 bg-white text-[#2D4059] rounded-md border  border-[#2D4059]">
                                {day + 1}
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Kalender;
