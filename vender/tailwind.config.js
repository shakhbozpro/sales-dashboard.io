/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      borderRadius: {
        'top-right': '3px',
        'top-left': '3px',
        'bottom-right': '3px',
        'bottom-left': '3px',
      },
    },
  },
  plugins: [],
}

