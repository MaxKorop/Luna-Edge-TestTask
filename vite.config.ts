import react from '@vitejs/plugin-react';
import { type ConfigEnv, defineConfig, loadEnv } from 'vite';
import path from 'path';
import svgr from "vite-plugin-svgr";

const config = ({ mode }: ConfigEnv): ReturnType<typeof defineConfig> => {
  const { VITE_PORT } = loadEnv(mode, process.cwd());

  return defineConfig({
    build: {
      outDir: 'build',
    },
    plugins: [react(), svgr()],
    server: {
      port: Number(VITE_PORT) || 10000,
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  });
};

export default config;
