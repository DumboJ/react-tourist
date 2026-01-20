import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    //服务相关配置
    /*server: {
        host: 'localhost',
        port: 6001,
        proxy: {
            '/api': 'http://xxxx'
        }
    },*/
    //@路径配置
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    plugins: [react()],
})
