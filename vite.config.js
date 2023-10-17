import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteSW } from 'vite-plugin-sw';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    ViteSW({
      runtimeCaching: [
        {
          urlPattern: ({ url }) => {
            return url.pathname.startsWith('/');
          },
          handler: 'CacheFirst',
        },
      ],
    }),],

})
