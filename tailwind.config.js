module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                base: "#23395b",
                baseDark: "#161925",
                primary: "#3b82f6",
                secondary: "#cbf7ed",
                error: "#d0a5c0",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
