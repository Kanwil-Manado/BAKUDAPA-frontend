// import { BarChart2, ShoppingBag, Users, Weight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Carousel from "../components/common/carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandsClapping, faBookmark} from '@fortawesome/free-solid-svg-icons';
import Kalender from "../components/common/kalender";
import Pengumuman from "../components/common/pengumuman";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

// import SalesOverviewChart from "../components/overview/SalesOverviewChart";
// import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
// import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'style={{ backgroundColor: '#ffff' }}>
			<Header title='BAKUDAPA' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

				<div className="flex flex-row justify-between py-12 px-6">
					<div className='flex flex-col justify-center'>
						<h1 className="text-[#176AD1] font-bold text-5xl">Halo, </h1>
						<h2 className="text-[#ebb434] font-semibold text-3xl">
							Selamat Bakudapa Lagi!
							<motion.span
								className="text-[#ffc400] inline-block ml-3"
								animate={{ rotate: [0, 20, -20, 10, -10, 0] }}
								transition={{ duration: 2, ease: "easeInOut" }}
							>
								<FontAwesomeIcon icon={faHandsClapping} />
							</motion.span>
						</h2>
						<p className="text-[#176AD1] text-md max-w-md mt-12
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
				
				<div className="flex bg-[#176AD1]  bg-opacity-5 justify-center text-[#2D4059] text-xl font-semibold mt-8 mb-8 p-1 shadow-md">
					<h1>- Penyaluran TKD di Sulawesi Utara -</h1>
				</div>


				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					
					<StatCard
					name="DANA ALOKASI UMUM"
					pagu={8841314030000}
					realisasi={6484179681575}
					percentage={50}
					color="#28a745" 
					icon={<FontAwesomeIcon icon={faBookmark} />}  
				/>

					<StatCard
					name="DANA ALOKASI UMUM"
					pagu={8841314030000}
					realisasi={6484179681575}
					percentage={50}
					color="#28a745" 
					icon={<FontAwesomeIcon icon={faBookmark} />}  
				/>

					<StatCard
					name="DANA ALOKASI UMUM"
					pagu={8841314030000}
					realisasi={6484179681575}
					percentage={50}
					color="#28a745" 
					icon={<FontAwesomeIcon icon={faBookmark} />}  
				/>

				<StatCard
					name="DANA ALOKASI UMUM"
					pagu={8841314030000}
					realisasi={6484179681575}
					percentage={50}
					color="#28a745" 
					icon={<FontAwesomeIcon icon={faBookmark} />}  
				/>


				</motion.div>


				<div className="flex flex-row space-x-8 mb-8">
					<Pengumuman />
					<Kalender />
				</div>

				{/* CHARTS */}
				
				{/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverviewChart />
					<CategoryDistributionChart />
					<SalesChannelChart />
				</div> */}
			</main>
		</div>
	);
};
export default OverviewPage;
