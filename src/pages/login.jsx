import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faFax } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg">
      {/* Left Section with White Background and Proper Rounded Corners */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-4 bg-white md:rounded-r-[3rem] rounded-b-2xl md:rounded-bl-none">
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/logo-bakudapa.png"
            alt="Logo Aplikasi Bakudapa"
            className="w-1/3"
          />
          <h1 className="text-center text-3xl text-[#176AD1] font-bold ml-4">BAKUDAPA</h1>
        </motion.div>

        {/* Contact Info */}
        <div className="flex flex-row items-start mt-6 md:mt-auto">
          <img src="/logo-djpb.png" alt="Logo Ditjen Perbendaharaan" className="w-16 h-16 ml-8 mt-4" />
          <div className="m-4">
            <div className="flex items-start mt-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-sm text-[#176AD1] mr-2 mt-1" />
              <div>
                <h3 className="font-medium text-sm">Alamat</h3>
                <p className="text-xs">Gedung Keuangan Negara Manado Lt. 3 Jl. Bethesda No.8 Manado 95114</p>
              </div>
            </div>

            <div className="flex space-x-8">
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

      {/* Right Section with Blue-Yellow Gradient Background and Rounded Corners */}
      <motion.div 
        className="flex-1 flex items-center justify-center bg-gradient-blue-yellow p-8 md:rounded-l-[3rem] rounded-t-2xl md:rounded-tl-none relative overflow-hidden"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Waves */}
        <div className="absolute bottom-0 left-0 w-full h-full">
          <div className="absolute inset-0 z-10 backdrop-blur-md bg-white bg-opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-white bg-opacity-50 rounded-tl-full rounded-tr-full animate-wave"></div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-white bg-opacity-50 rounded-tl-full rounded-tr-full animate-wave-reverse"></div>
        </div>

        <div className="relative z-20 w-full max-w-md bg-white bg-opacity-80 p-6 rounded-lg shadow-lg backdrop-blur-md">
          {/* Mobile Logo */}
          <div className="flex justify-center items-center mb-6 md:hidden">
            <img
              src="/logo-bakudapa.png"
              alt="Logo Aplikasi Bakudapa"
              className="w-1/3 h-1/3 box-border bg-full"
            />
            <h1 className="text-center text-3xl font-thin text-[#176AD1] ml-2">BAKUDAPA</h1>  
          </div>

          <h2 className="text-2xl font-bold mb-1 text-[#176AD1] text-center md:text-left">
            LOG IN AKUN
          </h2>
          <h2 className="text-xl font-light mb-6 text-[#ebb434] text-center md:text-left">
            <ReactTyped strings={["Halo, Selamat Datang #SobatDJPB !"]} typeSpeed={50} backSpeed={50} loop />
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#ebb434]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Masukkan Email Anda" 
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#ebb434]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Masukkan Password Anda"
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
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="flex justify-center"> {/* Center the button */}
              <button
                type="submit"
                className="w-1/2 flex max-w-xs flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-sm font-medium text-white bg-[#176AD1] hover:bg-[#ebb434] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
