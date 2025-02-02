import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // 해당 경로를 프로젝트의 구조에 맞게 조정
    './node_modules/daisyui/**/*.js', // Daisy UI 컴포넌트 경로 추가
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('daisyui')],
};

export default config;
