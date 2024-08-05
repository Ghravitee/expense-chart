/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Soft-Red": "hsl(10, 79%, 65%)",
        "Cyan": "hsl(186, 34%, 60%)",
        "Dark-Brown": "hsl(25, 47%, 15%)",
        "Medium-Brown": "hsl(28, 10%, 53%)",
        "Cream": "hsl(27, 66%, 92%)",
        "Very-Pale-Orange": "hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
