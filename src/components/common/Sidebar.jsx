import { Home, List, Menu,Landmark,MessageCircleMore,CircleUserRound, ChartColumn } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
	{
		name: "Beranda",
		icon: Home,
		color: "#F59E0B",
		href: "/",
	},
	{ name: "Dashboard", icon: ChartColumn, color: "#3B82F6", href: "/dashboard" },
	{ name: "KPPN", icon: Landmark, color: "#3B82F6", href: "/kppn" },
	{ name: "Daerah", icon: List, color: "#8B5CF6", href: "/daerah" },
	{ name: "Obrolan", icon: MessageCircleMore, color: "#10B981", href: "/obrolan" },
	{ name: "Akun", icon: CircleUserRound, color: "#6EE7B7", href: "/akun" },
];

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<motion.div
			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-64" : "w-20"
			}`}
			animate={{ width: isSidebarOpen ? 200 : 80 }}
		>
			<div className='h-full bg-[#edf9fd]  p-4 flex flex-col border-r border[#dddd] shadow-md'>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 text-black rounded-full hover:bg-[#c3ebfa] transition-colors max-w-fit'
				>
					<Menu size={24} />
				</motion.button>

				<nav className='mt-8 flex-grow'>
					{SIDEBAR_ITEMS.map((item) => (
						<Link key={item.href} to={item.href}>
							<motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#c3ebfa] transition-colors mb-6'>
								<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
								<AnimatePresence>
									{isSidebarOpen && (
										<motion.span
											className='ml-4 whitespace-nowrap text-black'
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
										>
											{item.name}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						</Link>
					))}
				</nav>
			</div>
		</motion.div>
	);
};
export default Sidebar;
