/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                softBlack: "#222831",
                softGray: "#393e46",
                softBlue: "#0092ca",
                softWhite: "#eeeeee",
            },
        },
    },
    plugins: [],
};
