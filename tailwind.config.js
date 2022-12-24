/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
  darkMode: 'class',
}
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
// npx tailwindcss -i ./src/input.scss -o ./dist/output.css --watch
