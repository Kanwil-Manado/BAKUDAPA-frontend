/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Plus Jakarta Sans', 'sans-serif'], // Mengganti font sans bawaan dengan Montserrat
			  },
		},
	},
	plugins: [],
};
