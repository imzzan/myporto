/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#A6BCFA",
        blue : "#2157F2",
        black : "#393939",
        darkblue : '#24335C'
      },
      screens : {
        sm : '320px',
        md : '480px',
        lg : '750px',
        xl : '1024px',
        laptop: '1280px',
        pc : '1536px'
      },
      dropShadow : {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

