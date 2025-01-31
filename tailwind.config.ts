import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 해당 경로를 프로젝트의 구조에 맞게 조정
    "./node_modules/daisyui/**/*.js", // Daisy UI 컴포넌트 경로 추가
  ],
  theme: {
    extend: {
      fontFamily: {
        minSans: ["MinSans", "sans-serif"],
      },
      fontWeight: {
        medium: 500, // Medium
        semibold: 600, // SemiBold
      },
      colors: {
        main: "#0074D9",
        sub: "#FFFACD",
        third: "#FFFCE1",
        white: "#FFFFFF",
        "white-gray": "#E0E0E0",
        "light-gray": "#BDBDBD",
        gray: "#9E9E9E",
        "dark-gray": "#616161",
        black: "#333333",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("daisyui")],
};

export default config;
