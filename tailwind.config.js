module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
        black: '#0f0f0f',
        gray: '#333333',
        blue: '#0000ff',
        red: '#ff0000',
        pink: '#ff3333',
        white: '#ffffff',
        },
        fontFamily: {
        // sans: ['Graphik', 'sans-serif'],
        // serif: ['Merriweather', 'serif'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}