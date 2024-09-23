import { motion } from "framer-motion";
import Carousel from "../components/common/carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandsClapping} from '@fortawesome/free-solid-svg-icons';
import Kalender from "../components/common/kalender";
import Pengumuman from "../components/common/pengumuman";
import Header from "../components/common/Header";



const BerandaPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'style={{ backgroundColor: '#f6faff' }}>
			<Header title='BAKUDAPA' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

				<div className="flex flex-row justify-between py-12 px-6">
					<div className='flex flex-col justify-center'>
						<h1 className="text-[#176AD1] font-semibold text-5xl">Halo, </h1>
						<h2 className="text-[#ebb434] font-light text-3xl">
							Selamat Bakudapa Lagi!
							<motion.span
								className="text-[#ffc400] inline-block ml-3"
								animate={{ rotate: [0, 20, -20, 10, -10, 0] }}
								transition={{ duration: 2, ease: "easeInOut" }}
							>
								<FontAwesomeIcon icon={faHandsClapping} />
							</motion.span>
						</h2>
						<p className="text-black text-md max-w-md mt-12
						 ">" Bakudapa atau <span className="font-bold">Basis Data Khusus DAK Fisik dan Dana Desa Provinsi Sulawesi Utara</span>,
						 hadir sebagai aplikasi untuk memonitoring progres kinerja penyaluran DAK Fisik dan Dana Desa di Provinsi Sulawesi Utara. "</p>
						
						 <motion.div
							className="w-1/2 box-border text-white p-2 bg-[#ebb434] text-center font-semibold mt-8 rounded-md border border-transparent"
							whileHover={{
								y: -2,
								boxShadow: "0 25px 50px -12px rgba(235, 180, 52, 0.7)",
								border: "1px solid #ebb434",
								background:"white",
								color:"#ebb434",
								fontWeight:"bold"
							}}
							>
							<button>
								Selengkapnya
							</button>
						</motion.div>
					</div>

					<div className="carousel">
						<Carousel></Carousel>
					</div>
				</div>


				<div className="container flex gap-4">
					<div className="pengumuman bg-[#ffff] shadow-lg p-4 rounded-lg w-full md:w-full">
						<Pengumuman></Pengumuman>
					</div>
					<div className="kalender bg-[#ffff] shadow-lg p-4 rounded-lg w-full md:w-full">
						<Kalender></Kalender>
					</div>
				</div>



			
				


			</main>
		</div>
	);
};
export default BerandaPage;
