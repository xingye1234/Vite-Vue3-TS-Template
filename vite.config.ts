import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";
import AutoImport from 'unplugin-auto-import/vite';
import postcssPresetEnv from 'postcss-preset-env';
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),  AutoImport({
    imports:['vue', 'pinia', 'vue-router'], 
    eslintrc: {
      enabled: true, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    }
  }), UnoCSS()],
  resolve:{
    alias:{
      "@":resolve(__dirname, 'src')
    },
    extensions:['.js', '.ts', '.vue', '.tsx', '.jsx']
  },
  server:{
    host:"0.0.0.0",
    open:false,
    proxy:{
      
    }
  },
  css:{
    devSourcemap:true,
    postcss:{
      plugins:[postcssPresetEnv()]
    },
    preprocessorOptions:{
      less:{
        math:"always",
        // globalVars:{
        //   fontSize:'20px',
        //   primaryColor:'skyblue',
        // },
        additionalData:`@import "@/assets/app.variable.less";`
      }
    }
  },
  build:{
    target:"esnext",
    rollupOptions:{
      output:{
        manualChunks:(id)=>{
          if(id.includes("node_modules")){
            return "jhinfos"
          }
        }
      }
    }
  }
})
