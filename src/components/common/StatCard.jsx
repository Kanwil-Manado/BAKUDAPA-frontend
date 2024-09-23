import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease"; // Import easing function

const StatCard = ({ name, pagu, realisasi, percentage, icon }) => {
    // State untuk mengontrol animasi progress bar
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 3000; // Durasi animasi (ms)
        const start = performance.now(); // Waktu mulai animasi

        const animateProgress = (timestamp) => {
            const elapsed = timestamp - start; // Waktu berlalu sejak mulai
            const progressValue = easeQuadInOut(Math.min(elapsed / duration, 1)) * percentage; // Hitung progress dengan easing

            setProgress(progressValue); // Perbarui nilai progress

            if (elapsed < duration) {
                requestAnimationFrame(animateProgress); // Lanjutkan animasi sampai selesai
            }
        };

        requestAnimationFrame(animateProgress); // Mulai animasi

    }, [percentage]); // Jalankan hanya saat 'percentage' berubah

    return (
        <motion.div 
            className="grid  grid-rows-8 bg-[#ffff] shadow-md rounded-lg border border-gray-200 items-center"
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
        >
			<div className="row-span-2  box-border border-b-2 border-[#dddd] w-full py-4">
				<div className="flex flex-row justify-center text-center gap-4 text-[#2D4059] font-semibold">
					<span className="text-xl">{icon} </span>
					<span className=" text-xl ">{name}</span>
				</div>
			</div>



            <div className="row-span-3">
                    <div className="mr-2 flex flex-col items-center font-extrabold ">
                        <div style={{ width: 120, height: 120 }}>
                            <CircularProgressbar
                                value={progress}
                                text={`${Math.round(progress)}%`} // Tampilkan nilai progress yang dibulatkan
                                styles={buildStyles({
                                    textColor: "#2D4059",
                                    textSize: "1.3rem", // Ukuran teks diperkecil agar lebih minimalis
                                    pathColor: `url(#gradient)`, // Gunakan gradasi warna
                                    trailColor: "#eeeeee", // Warna yang lebih soft untuk background
                                    strokeLinecap: "round", // Membuat ujung progress bar lebih bulat
                                    pathTransitionDuration: 0.5, // Animasi progress bar
                                    pathWidth: 50, // Ketebalan path
                                    trailWidth: 50, // Ketebalan trail
                                })}
                            />

                            <svg style={{ height: 0 }}>
                                <defs>
                                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                                        <stop offset="0%" stopColor="#176AD1" />
                                        <stop offset="100%" stopColor="#00D1B2" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                            <p className="mt-2 text-gray-600 text-xs font-light">Persentase Penyaluran</p>
                        </div>
				</div>

			<div className="row-span-3">
                <div className="flex justify-around py-6 px-2">
                    <div className="text-[#176AD1] text-md mb-6">
                        <p>Pagu </p>
                        <p className="font-bold text-sm text-[#2D4059]">Rp {pagu}</p>
                    </div>
                    <div className="text-[#176AD1] text-md  mb-6">
                        <p>Realisasi </p>
                        <p className="font-bold text-sm text-[#2D4059]">Rp {realisasi}</p>
                    </div>
                </div>
			</div>



        </motion.div>
    );
};

export default StatCard;
