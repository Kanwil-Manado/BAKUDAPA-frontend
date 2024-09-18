import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faFax } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";  // Import framer-motion

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Bagian Logo, Logo Bakudapa di tengah */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-4">
        {/* Logo Kemenkeu di kiri atas */}
        <div className="flex justify-start items-start">
          <img src="/logo-kemenkeu.png" alt="Logo Kementrian Keuangan Republik Indonesia" className="w-14 h-14 ml-8 mt-4" />
          <div className="m-4">
            <h1 className="text-sm">KEMENKEU RI</h1>
            <h2 className="text-xs">DITJEN PERBENDAHARAAN</h2>
            <h3 className="font-bold text-xs text-[#176AD1]">Kanwil DJPb Prov. Sulawesi Utara</h3>
          </div>
        </div>

        {/* Logo Bakudapa di tengah */}
        <motion.div 
          className="flex flex-col justify-center items-center mt-10 mb-10"
          initial={{ opacity: 0, scale: 0.8 }}  // Mulai dari transparansi dan ukuran kecil
          animate={{ opacity: 1, scale: 1 }}   // Animasikan ke ukuran normal dan full opacity
          transition={{ duration: 1 }}       // Durasi animasi 0.5 detik
        >
          <img
            src="/logo-bakudapa.png"
            alt="Logo Aplikasi Bakudapa"
            className="w-1/3"
          />
          <h1 className="text-center text-3xl text-[#176AD1] font-bold ml-4">BAKUDAPA</h1>
        </motion.div>

        {/* Logo DJPb dan Hubungi Kami di bawah */}
        <div className="flex flex-row items-start mt-6 md:mt-auto">
          <img src="/logo-djpb.png" alt="Logo Ditjen Perbendaharaan" className="w-16 h-16 ml-8 mt-4" />
          
          <div className="m-4">
            <h1 className="font-thin text-lg">Hubungi Kami :</h1>

            {/* Alamat */}
            <div className="flex items-start mt-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-sm text-[#176AD1] mr-2 mt-1" />
              <div>
                <h3 className="font-medium text-sm">Alamat</h3>
                <p className="text-xs">Gedung Keuangan Negara Manado Lt. 3 Jl. Bethesda No.8 Manado 95114</p>
              </div>
            </div>

            {/* Telepon Fax */}
            <div className="flex gap-8">
              <div className="flex items-start mt-2">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-sm text-[#176AD1] mr-2 mt-1" />
                <div>
                  <h3 className="font-medium text-sm">Telp:</h3>
                  <p className="text-xs">0431-848444</p>
                </div>
              </div>

              <div className="flex items-start mt-2">
                <FontAwesomeIcon icon={faFax} className="text-sm text-[#176AD1] mr-2 mt-1" />
                <div>
                  <h3 className="font-medium text-sm">Fax:</h3>
                  <p className="text-xs">0431-848666</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bagian untuk login akun dengan background biru */}
      <motion.div className="flex-1 flex items-center justify-center bg-[#176AD1] p-8 md:rounded-l-[5rem]"
                initial={{ x: 300, opacity: 0 }}  // Mulai dari kanan dan transparan
                animate={{ x: 0, opacity: 1 }}   // Animasikan ke posisi normal dan full opacity
                transition={{ duration: 1 }}   // Durasi animasi 0.7 detik
      >
        <div className="w-full max-w-md  p-6 rounded-lg">
          {/* Jika di layar kecil, tampilkan logo di atas */}
          <div className="flex justify-center items-center mb-6 md:hidden">
            <img
              src="/logo-bakudapa.png"
              alt="Logo Aplikasi Bakudapa"
              className="w-1/3 h-1/3 box-border bg-white rounded-full"
            />
            <h1 className="text-center text-3xl font-thin text-[#176AD1] ml-2">BAKUDAPA</h1>  
          </div>

          <h2 className="text-2xl font-bold mb-1 text-white text-center md:text-left">
            LOG IN AKUN
          </h2>
          <h2 className="text-xl font-light mb-6 text-[#FFD700] text-center md:text-left">
            Halo, Selamat Datang !
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#FFD700]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Masukkan email Anda"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#FFD700]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Masukkan password Anda"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-white"
                >
                  Ingat Saya
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#FFD700] hover:text-[#F9A825]"
                >
                  Lupa Password?
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/2 flex justify-center py-3 px-2 border rounded-3xl shadow-lg text-sm font-bold text-[#176AD1] bg-white hover:border-white hover:text-white hover:bg-[#176AD1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Masuk
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
