import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';  // Import styles

const StatCard = ({ name, pagu, realisasi, percentage, color, icon }) => {
    return (
        <motion.div 
            className="flex flex-col bg-white bg-opacity-10 shadow-md p-4 rounded-lg border border-gray-200 items-center"
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
        >

				<div className="flex items-start  text-[#2D4059] font-semibold mb-2">
                    <span className="text-lg">{icon} </span>{/* Di sini ikon diteruskan sebagai komponen */}
                    <span className="ml-2 text-lg  ">{name}</span>
                </div>


			<div className="flex justify-between">
				<div className="flex-col">
					<div className="text-[#176AD1] text-md mb-2 px-6">
						<p>Pagu </p>
						<p className="font-bold text-sm text-[#2D4059]">Rp {pagu}</p>
					</div>
					<div className="text-[#176AD1] text-md  mb-2 px-6">
						<p>Realisasi </p>
						<p className="font-bold text-sm text-[#2D4059]">Rp {realisasi}</p>
					</div>
				</div>

				{/* Bagian kanan untuk CircularProgressbar */}
				<div className="mr-4 flex flex-col items-center font-extrabold ">
					<div style={{ width: 100, height: 100 }}>
						<CircularProgressbar
							value={percentage}
							text={`${percentage}%`}
							styles={buildStyles({
								textColor: "#176AD1",
								textSize:"1.5rem",
								pathColor: color || "#176AD1",
								trailColor: "#dddd",
								strokeWidth: 10,  
							})}
						/>
					</div>
					<p className="mt-2 text-gray-600 text-xs font-medium">Persentase Penyaluran</p>
				</div>
			</div>
        </motion.div>
    );
};

export default StatCard;
