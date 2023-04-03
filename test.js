// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        background: "#fefef4",
        foreground: "#2a2a2c",
        neutral: {
          50: "#fbfbf1",
          100: "#f7f7ef",
          200: "#eaeae3",
          300: "#d9d9d4",
          400: "#a8a8a4",
          500: "#777775",
          600: "#575757",
          700: "#444445",
          800: "#2a2a2c",
          900: "#18181a",
        },
        green: {
          DEFAULT: "#63cf8f",
          50: "#edfdf3",
          100: "#d6f9e1",
          200: "#b2f1c9",
          300: "#86e4ad",
          400: "#63cf8f",
          500: "#4bb677",
          600: "#37945f",
          700: "#27774f",
          800: "#1c5e3f",
          900: "#144e35",
        },
        pink: {
          DEFAULT: "#eb87a9",
          50: "#fef2f6",
          100: "#fee9f1",
          200: "#fdd4e4",
          300: "#f7b2cc",
          400: "#eb87a9",
          500: "#e36289",
          600: "#d44467",
          700: "#ba2f4e",
          800: "#9d203e",
          900: "#851735",
        },
        orange: {
          DEFAULT: "#ffa47c",
          50: "#fff7f0",
          100: "#fff2e6",
          200: "#ffe0c9",
          300: "#ffc8a3",
          400: "#ffa47c",
          500: "#f98464",
          600: "#e86655",
          700: "#c14941",
          800: "#9a3532",
          900: "#7d2a25",
        },
        blue: {
          DEFAULT: "#50baf3",
          50: "#f0f9ff",
          100: "#e1f1fe",
          200: "#bce5fc",
          300: "#85d1fa",
          400: "#50baf3",
          500: "#34a3e5",
          600: "#2582c4",
          700: "#1a68a0",
          800: "#145885",
          900: "#12496f",
        },
      },
    },
  },
  // ...
};

/**
 * TO USE:
 *
 * <body class="bg-background text-foreground dark:bg-foreground dark:text-background"></div>
 */
