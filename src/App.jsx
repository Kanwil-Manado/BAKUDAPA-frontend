import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/login";

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
            <Route path='/' element={<OverviewPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='/sales' element={<SalesPage />} />
            <Route path='/orders' element={<OrdersPage />} />
            <Route path='/analytics' element={<AnalyticsPage />} />
            <Route path='/settings' element={<SettingsPage />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
