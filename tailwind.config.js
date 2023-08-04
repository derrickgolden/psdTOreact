/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ringLine': "url('../src/assets/shapes/ringLine.svg')",
        'mockUp': "url('../src/assets/shapes/textBG.svg')",
        'socialShape': "url('../src/assets/shapes/socialShape.svg')",
        'topdownLine': "url('../src/assets/shapes/topDownLine.svg')",
        'signUpShape': "url('../src/assets/shapes/signUpShape.svg')",
        'logoShape': "url('../src/assets/shapes/logoShape.svg')",
        'polygon': "url('../src/assets/shapes/polygon.png')",
      },
      gridTemplateRows: {
       '0': '0fr',
       '1': '1fr'
      },
      transitionProperty: {
        'gridRow': 'grid-template-rows',
        'visibility': 'visibility'
       }
    },
    fontFamily: {
      serif: [
        'Montserrat', 'sans-serif'
      ]
    },
    textColor: {
      "blue": "#46a1c5",
      "white": "#ffffff"
    }
  },
  plugins: [],
}
