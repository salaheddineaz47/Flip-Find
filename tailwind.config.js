/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      animation: {
        flip: "flip 0.5s forwards",
        pulse: "2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      transform: {
        "rotate-y-0": "rotateY(0deg)",
        "rotate-y-180": "rotateY(180deg)",
      },
      colors: {
        primary: {
          100: "#D1D5DB", // Light primary color
          400: "#4B5563", // Darker primary color
        },
        neutral: {
          100: "#F3F4F6", // Light neutral color
        },
      },
    },
  },
  plugins: [],
};
