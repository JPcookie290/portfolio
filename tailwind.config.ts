import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lilac: "#DCC6E0",
        lightOrange: "#F0D0BD",
        pinkish: "#E9D8EB",
        pastelGreen: "#7EC6A8",
      },
    },
  },
  plugins: [],
};

export default config;
