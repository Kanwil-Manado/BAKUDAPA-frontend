/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ['Plus Jakarta Sans', 'sans-serif'], // Mengganti font sans bawaan
		},
		keyframes: {
		  gradient: {
			'0%': { backgroundPosition: '0% 0%' },
			'50%': { backgroundPosition: '100% 100%' },
			'100%': { backgroundPosition: '0% 0%' },
		  },
		  wave: {
			'2%': { transform: 'translateX(1)' },
			'25%': { transform: 'translateX(-25%)' },
			'50%': { transform: 'translateX(-50%)' },
			'75%': { transform: 'translateX(-25%)' },
			'100%': { transform: 'translateX(1)' },
		  },
		},
		animation: {
		  gradient: 'gradient 15s ease infinite',
		  wave: 'wave 10s -3s linear infinite',
		  'wave-reverse': 'wave 18s linear reverse infinite',
		},
		backgroundSize: {
		  '400%': '400% 400%',
		},
		backgroundImage: {
		  'gradient-blue-yellow': 'linear-gradient(315deg, #0077B6 3%, #0096C7 38%, #00B4D8 68%, #FFD60A 98%)',
		},
	  },
	},
	plugins: [],
  };
  