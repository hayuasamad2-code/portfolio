/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#6366f1', // Indigo
                    light: '#818cf8',
                    dark: '#4f46e5',
                },
                secondary: {
                    DEFAULT: '#ec4899', // Pink
                    light: '#f472b6',
                    dark: '#db2777',
                },
                neutral: {
                    950: '#030712', // Very dark blue/black
                    900: '#111827',
                    800: '#1f2937',
                    700: '#374151',
                    ...require('tailwindcss/colors').gray,
                },
                accent: '#f59e0b', // Amber
            },
            fontFamily: {
                heading: ['Outfit', 'Inter', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            animation: {
                'gradient-x': 'gradient-x 15s ease infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
            backgroundImage: {
                'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            }
        },
    },
    plugins: [],
}
