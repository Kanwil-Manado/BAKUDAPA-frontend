import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import BerandaPage from "./pages/BerandaPage";
import LoginPage from "./pages/login";
import DashboardPage from "./pages/DashboardPage";
import KppnPage from "./pages/KppnPage";
import DaerahPage from "./pages/DaerahPage";
import ObrolanPage from "./pages/ObrolanPage";
import AkunPage from "./pages/AkunPage";

function App() {
  const location = useLocation(); // Untuk mendapatkan URL saat ini

  // Jika berada di halaman login, tidak menampilkan sidebar dan layout utama
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {/* Cek apakah di halaman login */}
      {isLoginPage ? (
        <LoginPage />
      ) : (
        <div className='flex h-screen bg-white text-gray-100 overflow-hidden'>
          {/* BG */}
          <div className='fixed inset-0 z-0'>
            <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
            <div className='absolute inset-0 backdrop-blur-sm' />
          </div>

          <Sidebar />

          {/* Routes */}
          <Routes>
            <Route path='/' element={<BerandaPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/kppn' element={<KppnPage />} />
            <Route path='/daerah' element={<DaerahPage />} />
            <Route path='/obrolan' element={<ObrolanPage />} />
            <Route path='/akun' element={<AkunPage />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
