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
            className="grid  grid-cols-8 bg-[#ffff] shadow-md rounded-lg border border-gray-200 items-center"
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
        >
			<div className="col-span-2">
				<div className="flex flex-col justify-center text-center gap-4 text-[#2D4059] font-semibold box-border border-r-2 border-[#dddd] w-full p-2">
					<span className="text-2xl">{icon} </span>
					<span className="ml-2 text-md ">{name}</span>
				</div>
			</div>

			<div className="col-span-3">
            <div className="flex justify-between py-6 px-2">
                <div className="flex-col">
                    <div className="text-[#176AD1] text-md mb-6 px-2">
                        <p>Pagu </p>
                        <p className="font-bold text-sm text-[#2D4059]">Rp {pagu}</p>
                    </div>
                    <div className="text-[#176AD1] text-md  mb-6 px-2">
                        <p>Realisasi </p>
                        <p className="font-bold text-sm text-[#2D4059]">Rp {realisasi}</p>
                    </div>
                </div>
				</div>
			</div>


				<div className="col-span-3">
                {/* Bagian kanan untuk CircularProgressbar */}
                <div className="mr-4 flex flex-col items-center font-extrabold ">
                    <div style={{ width: 100, height: 100 }}>
						<CircularProgressbar
							value={progress}
							text={`${Math.round(progress)}%`} // Tampilkan nilai progress yang dibulatkan
							styles={buildStyles({
								textColor: "#2D4059",
								textSize: "1rem", // Ukuran teks diperkecil agar lebih minimalis
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
        </motion.div>
    );
};

export default StatCard;
