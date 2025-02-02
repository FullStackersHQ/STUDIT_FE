import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // 해당 경로를 프로젝트의 구조에 맞게 조정
    './node_modules/daisyui/**/*.js', // Daisy UI 컴포넌트 경로 추가
  ],
  theme: {
    extend: {
      colors: {
        main: '#0074D9',
        'main-hover': '#008CFF',
        sub: '#FFFACD',
        'sub-hover': '#fff5b0',
        third: '#FFFCE1',
        white: '#FFFFFF',
        'white-gray': '#E0E0E0',
        'light-gray': '#BDBDBD',
        gray: '#9E9E9E',
        'dark-gray': '#616161',
        black: '#333333',
        topup: '#03A6FF',
        withdraw: '#00CC99',
        deduct: '#FF6B6B',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('daisyui')],
};

export default config;
