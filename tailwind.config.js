/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gradientStart: "#E9E4F0", // Add your gradient start color
        gradientEnd: "#D3CCE3", // Add your gradient end color
      },
      animation: {
        "rotate-x": "rotateX 10s linear infinite", // Define the custom slow rotation
      },
      keyframes: {
        rotateX: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      boxShadow: {
        "black-btn":
          "0 4px 8px rgba(255, 253, 254, 0.2), 0 6px 12px rgba(0, 0, 0, 0.8)",

        btn: "0 4px 8px rgba(242, 253, 254, 0.6), 0 12px 24px rgba(0.2, 0.5, 0.4, 0.8)",
      },
    },
  },
  options: {
    safelist: ["backdrop-blur-sm", "backdrop-blur-md", "backdrop-blur-lg"],
  },
  plugins: [],
};
