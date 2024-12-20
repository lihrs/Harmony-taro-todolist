/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{tsx,ts,js,html}",
    "./src/app.ts",
    "./src/index.html"
  ],
  corePlugins: {
    // 小程序不需要 preflight，因为这主要是给 h5 的，如果你要同时开发多端，你应该使用 process.env.TARO_ENV 环境变量来控制它
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

