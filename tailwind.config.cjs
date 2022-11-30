
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}"],
  theme: {
    extend:{
      colors:{
        'blue-ribbon': {
          '50': '#f7f8ff', 
          '100': '#eef0ff', 
          '200': '#d5daff', 
          '300': '#bbc3ff', 
          '400': '#8996ff', 
          '500': '#5669ff', 
          '600': '#4d5fe6', 
          '700': '#414fbf', 
          '800': '#343f99', 
          '900': '#2a337d'
      },
      'white': {
        '50': '#ffffff', 
        '100': '#ffffff', 
        '200': '#ffffff', 
        '300': '#ffffff', 
        '400': '#ffffff', 
        '500': '#ffffff', 
        '600': '#e6e6e6', 
        '700': '#bfbfbf', 
        '800': '#999999', 
        '900': '#7d7d7d'
    },
    'mercury': {
      '50': '#fefefe', 
      '100': '#fcfcfc', 
      '200': '#f9f9f9', 
      '300': '#f5f5f5', 
      '400': '#ededed', 
      '500': '#e5e5e5', 
      '600': '#cecece', 
      '700': '#acacac', 
      '800': '#898989', 
      '900': '#707070'
  },
  'seashell': {
    '50': '#fefefe', 
    '100': '#fefefe', 
    '200': '#fcfcfc', 
    '300': '#faf9f9', 
    '400': '#f7f5f5', 
    '500': '#f3f1f1', 
    '600': '#dbd9d9', 
    '700': '#b6b5b5', 
    '800': '#929191', 
    '900': '#777676'
},
'tundora': {
  '50': '#f6f6f6', 
  '100': '#edecec', 
  '200': '#d2d1d1', 
  '300': '#b7b5b5', 
  '400': '#807d7d', 
  '500': '#4a4545', 
  '600': '#433e3e', 
  '700': '#383434', 
  '800': '#2c2929', 
  '900': '#242222'
},
'black': {
  '50': '#f2f2f2', 
  '100': '#e6e6e6', 
  '200': '#bfbfbf', 
  '300': '#999999', 
  '400': '#4d4d4d', 
  '500': '#000000', 
  '600': '#000000', 
  '700': '#000000', 
  '800': '#000000', 
  '900': '#000000'
}
      }
    }
    
  },
  plugins: [],
};
