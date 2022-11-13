const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'cinza': {
                    100: "#F8F9Fa",
                    200: "#9E9E9E",
                    300: "#8F8F8F",
                    400: "#3C3C3C",
                    500: "#333333"
                }

            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
