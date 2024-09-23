import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookmark, faHandHoldingHand, faPeopleRoof, faBuildingColumns, faUserGraduate, faChildReaching, faUserNurse} from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-[#f6faff]'>
			<Header title={"Dashboard TKD"} />
				
			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
			<div className="col-span-6">
				<div className="flex bg-white justify-center text-[#2D4059] text-xl font-semibold mt-8 mb-8 p-1 shadow-md rounded-md">
				<h1>- Penyaluran TKD di Sulawesi Utara -</h1>
				</div>

    {/* STATS */}
    <motion.div
      className="grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-8"
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

			</main>
		</div>
	);
};
export default DashboardPage;
