/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: { 'xsm': { 'max': '500px'},
      'for1111':{'max':'1111px'},
      'for700':{'max':'700px'},
      'for600':{'max':'600px'},
    },
  },
  plugins: [],
}
}

