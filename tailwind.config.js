/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }
    },
    extend: {
      colors: {
        brandColor: '#0001FB',
        secondColor: '#0F2167',
        thirdColor: '#3558E0',
        // color2: '#EA1B8F',
        // color3: '#F2F02D',
        // color4: 'rgb(81, 203, 255)',
      },
      // fontFamily: {
      //   custom: ['Times New Roman', 'sans'],
      // },
      keyframes: {
        'motion': {
          '0%, 100%': { left: '25%' },
          '50%': { left: '72%' }
        },
      },
      animation: {
        'slow-motion': 'motion 5s linear infinite',
      },
    },
  },
  plugins: [],
}
