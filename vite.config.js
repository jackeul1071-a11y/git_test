// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // 入口文件配置
  root: ".", // 项目根目录

  // 构建配置
  build: {
    outDir: "dist",

    // 确保正确打包
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        tone: resolve(__dirname, "src/tone/tone.html"),
        etch: resolve(__dirname, "src/Etch-a-Sketch/Etch-a-Sketch.html"),
        calculator: resolve(__dirname, "src/Calculator/Calculator.html"),
        tic: resolve(__dirname, "src/tic-tac-toe/tic.html"),
      },
      logLevel: "info", // 开启详细日志
    },
  },

  test: {
    // 测试环境
    environment: "node",

    // 全局 API
    globals: true,

    // 测试文件匹配
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],

    // 排除文件
    exclude: ["**/node_modules/**", "**/dist/**"],

    // 根目录
    root: process.cwd(),

    // 测试超时
    testTimeout: 10000,

    // 静默模式
    silent: false,
  },
  // 解析配置
  resolve: {
    // 路径别名
    alias: {
      "@": resolve(__dirname, "src"),
    },

    // 扩展名
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },

  // 开发服务器配置
  server: {
    port: 5173,
    open: true,
  },
});
