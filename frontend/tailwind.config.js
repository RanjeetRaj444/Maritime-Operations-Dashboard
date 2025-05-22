export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EBF5',
          100: '#C2D1E8',
          200: '#9BB4DA',
          300: '#7497CC',
          400: '#5782C1',
          500: '#3A6DB5',
          600: '#2F58A3',
          700: '#254491',
          800: '#1B307F',
          900: '#0A2463',
        },
        secondary: {
          50: '#E8F8F7',
          100: '#C7EDEA',
          200: '#A2E2DD',
          300: '#7DD7CF',
          400: '#5ECEC4',
          500: '#3CAEA3',
          600: '#309C92',
          700: '#258A81',
          800: '#1A7870',
          900: '#0F665F',
        },
        accent: {
          50: '#FEF5E7',
          100: '#FCE5C0',
          200: '#FAD599',
          300: '#F8C571',
          400: '#F7B54A',
          500: '#F6921E',
          600: '#E57E11',
          700: '#C56A0F',
          800: '#A5570C',
          900: '#854309',
        },
        success: '#2ECC71',
        warning: '#F39C12',
        error: '#E74C3C',
        dark: '#1E293B',
        light: '#F8FAFC'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}