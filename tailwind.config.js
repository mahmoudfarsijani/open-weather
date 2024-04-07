/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main':'#879CAA',
        'light-sky':'#ACDDFF',
        'elephent':'#506C80',
        'oil':'#274255',
        'dark-oil':'#0F2433',
        'ulight-sky':'#84B8F0'
      },
      width : {
        '25':'25%',
        '45':'45%',
        '50':'50%',
        '75':'75%',
        '100':'100%'
      }
    },
  },
  plugins: [require("daisyui")],
}

