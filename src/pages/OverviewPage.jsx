import { motion } from "framer-motion";
import Carousel from "../components/common/carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandsClapping, faBookmark, faHandHoldingHand, faPeopleRoof, faBuildingColumns, faUserGraduate, faChildReaching, faUserNurse} from '@fortawesome/free-solid-svg-icons';
import Kalender from "../components/common/kalender";
import Pengumuman from "../components/common/pengumuman";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";


const OverviewPage = () => {
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


	<div className="grid grid-cols-10 gap-8 mb-8">
  {/* Bagian Penyaluran TKD (3/5 layar) */}
  <div className="col-span-6">
    <div className="flex bg-white justify-center text-[#2D4059] text-xl font-semibold mt-8 mb-8 p-1 shadow-md rounded-md">
      <h1>- Penyaluran TKD di Sulawesi Utara -</h1>
    </div>

    {/* STATS */}
    <motion.div
      className="grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 mb-8"
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
        icon={<FontAwesomeIcon icon={faBookmark} style={{color: "blue"}} />}
      />
      <StatCard
        name="DANA BAGI HASIL"
        pagu={"468.812.614.000"}
        realisasi={"158.874.962.300"}
        percentage={33.89}
        color="#28a745"
        icon={<FontAwesomeIcon icon={faHandHoldingHand} style={{color: "red"}} />}
      />

	<StatCard
			name="DANA DESA"
			pagu={"468.812.614.000"}
			realisasi={"158.874.962.300"}
			percentage={33.89}
			color="#28a745"
			icon={<FontAwesomeIcon icon={faPeopleRoof} style={{color: "green",}} />}
		/>

		<StatCard
			name="DAK FISIK"
			pagu={"468.812.614.000"}
			realisasi={"158.874.962.300"}
			percentage={90}
			color="#28a745"
			icon={<FontAwesomeIcon icon={faBuildingColumns} style={{color: "orange",}} />}
		/>

		<StatCard
			name="BOS"
			pagu={"468.812.614.000"}
			realisasi={"158.874.962.300"}
			percentage={90}
			color="#28a745"
			icon={<FontAwesomeIcon icon={faUserGraduate} style={{color: "yellow",}} />}
		/>

		<StatCard
			name="BOP PAUD"
			pagu={"468.812.614.000"}
			realisasi={"158.874.962.300"}
			percentage={90}
			color="#28a745"
			icon={<FontAwesomeIcon icon={faChildReaching} style={{color: "pink",}} />}
		/>

		<StatCard
			name="BOP KESETARAAN"
			pagu={"468.812.614.000"}
			realisasi={"158.874.962.300"}
			percentage={90}
			color="#28a745"
			icon={<FontAwesomeIcon icon={faUserNurse} style={{color: "purple",}} />}
		/>
    </motion.div>
  </div>

  {/* Bagian Pengumuman dan Kalender (2/5 layar) */}
  <div className="col-span-4 flex flex-col space-y-8 mb-8 mt-8">
    <Pengumuman />
    <Kalender />
  </div>
</div>


				



				


			</main>
		</div>
	);
};
export default OverviewPage;
