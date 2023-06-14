import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // 빌드 결과물의 경로를 "build" 폴더로 지정
  },
});