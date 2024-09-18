import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faComments } from '@fortawesome/free-solid-svg-icons';

const Header = ({ title }) => {
  return (
    <header className="bg-[#ffff] backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-5">
        {/* Bagian kiri: Logo dan Title */}
        <div className="flex items-center gap-5">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo-bakudapa.png" 
              alt="Logo Aplikasi Bakudapa" 
              className="w-10 h-10 rounded-full" 
            />
          </div>

          {/* Title */}
          <div>
            <h1 className="text-3xl font-semibold text-[#176AD1]">{title}</h1>
          </div>
        </div>

        {/* Bagian tengah: Search Bar */}
        <div className="flex-1 max-w-lg mx-auto">
          <input 
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Bagian kanan: Ikon Chat dan Akun */}
        <div className="flex items-center gap-5">
          {/* Ikon Chat */}
          <div className="relative">
            <FontAwesomeIcon 
              icon={faComments} 
              className="text-gray-600 text-2xl" 
            />
            {/* Indikator jumlah pesan baru */}
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600"></span>
          </div>

          {/* Ikon Akun */}
          <div className="flex items-center">
            <FontAwesomeIcon 
              icon={faUserCircle} 
              className="text-gray-600 text-2xl" 
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
