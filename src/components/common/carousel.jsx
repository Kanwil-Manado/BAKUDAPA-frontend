import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const images = [
  "/sample-photo1.jpg",
  "/sample-photo2.jpg",
  "/sample-photo3.jpg"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk beralih ke gambar berikutnya
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fungsi untuk beralih ke gambar sebelumnya
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Membuat carousel bergerak otomatis setiap 3 detik
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, [currentIndex]);

  return (
    <div className="relative w-full h-64 mt-4 overflow-hidden">
      {/* Tombol Sebelumnya */}
      <button 
        onClick={prevImage} 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#FFD700] bg-opacity-50 rounded-md"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Gambar dengan Animasi */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex justify-center items-center"
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="object-cover w-full h-full max-h-64 rounded-lg shadow-lg"
          style={{ objectFit: 'cover' }} // Pastikan ukuran gambar tetap dalam carousel
        />
      </motion.div>

      {/* Tombol Selanjutnya */}
      <button 
        onClick={nextImage} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#FFD700] bg-opacity-50 text-white rounded-md"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Carousel;
