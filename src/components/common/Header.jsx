const Header = ({ title }) => {
	return (
		<header className='bg-[#176AD1] bg-opacity-50 backdrop-blur-md shadow-lg '>
			<div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center gap-5'>
				{/* Logo */}
				<div className='flex items-center'>
					<img 
						src="/logo-bakudapa.png" 
						alt="Logo Aplikasi Bakudapa" 
						className="w-10 h-10 rounded-full" 
					/>
				</div>

				{/* Title */}

				<div>
					<h1 className='text-3xl font-semibold text-gray-100'>{title}</h1>
				</div>
			</div>
		</header>
	);
};
export default Header;
